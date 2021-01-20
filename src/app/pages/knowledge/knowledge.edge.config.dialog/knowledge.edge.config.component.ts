/**
 * @author songxiwen
 * @date 2020/09/14
 */

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { KnowledgeService } from '../../../service';
type RelationKnowledgeForm = {
  type: string;
  relationKnowledge: string;
  knowledgeId: string
}
@Component({
  selector: 'edu-domain-config-dialog',
  templateUrl: './knowledge.edge.config.component.html',
  styleUrls: ['./knowledge.edge.config.component.scss']
})
export class KnowledgeEdgeConfigComponent implements OnInit {
  @Input()
  id?: string;

  knowledgeList: any = []

  knowledgeEdgeConfigForm = this.formBuilder.group({
    type: ['pre', [Validators.required]],
    relationKnowledge: ['', [Validators.required]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly modalRef: NzModalRef,
    private readonly messageService: NzMessageService,
    private readonly knowledgeService: KnowledgeService
  ) {
  }

  closeDialog(): void {
    this.modalRef.destroy();
  }

  async getKnowledgeList() {
    const response = await this.knowledgeService.getKnowledgeList();
    this.knowledgeList = response.data;
  }

  async submitKnowledgeEdgeConfigForm(): Promise<void> {
    Object.keys(this.knowledgeEdgeConfigForm.controls).forEach((item: string) => {
      this.knowledgeEdgeConfigForm.controls[item].markAsDirty();
      this.knowledgeEdgeConfigForm.controls[item].updateValueAndValidity();
    });
    const invalidFormItem = Object.keys(this.knowledgeEdgeConfigForm.controls).find(
      (item: string) => (this.knowledgeEdgeConfigForm.controls[item].status === 'INVALID')
    );
    if (invalidFormItem) {
      this.messageService.create('error', 'Element form not fulled');
      return;
    }
    let response: any;
    if (this.id) {
      response = await this.knowledgeService.createGraphEdge({
        ...this.knowledgeEdgeConfigForm.value,
        knowledge: this.id
      });
    }
    if (response) {
      this.messageService.create('success', 'success');
    }
    this.closeDialog();
  }

  async ngOnInit(): Promise<void> {
    await this.getKnowledgeList();
  }
}
