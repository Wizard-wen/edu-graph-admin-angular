/**
 * @author songxiwen
 * @date 2020/09/14
 */

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { KnowledgeService } from '../../../../service';

@Component({
  selector: 'edu-knowledge-base-type-config-dialog',
  templateUrl: './knowledge.base.type.config.component.html',
  styleUrls: ['./knowledge.base.type.config.component.scss']
})
export class KnowledgeBaseTypeConfigComponent implements OnInit {
  @Input()
  id?: string;

  @Input()
  name: string | undefined;

  @Input()
  key: string | undefined;

  knowledgeBaseTypeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    key: ['', [Validators.required]],
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

  async submitDomainForm(): Promise<void> {
    Object.keys(this.knowledgeBaseTypeForm.controls).forEach((item: string) => {
      this.knowledgeBaseTypeForm.controls[item].markAsDirty();
      this.knowledgeBaseTypeForm.controls[item].updateValueAndValidity();
    });
    const invalidNumber = Object.keys(this.knowledgeBaseTypeForm.controls).reduce(
      (previousValue: number, currentValue: string) => {
        if (
          this.knowledgeBaseTypeForm.controls[currentValue].status === 'INVALID'
        ) {
          previousValue += 1;
          return previousValue;
        }
        return previousValue;
      },
      0
    );
    if (invalidNumber > 0) {
      this.messageService.create('error', '知识点类型表单不全');
      return;
    }
    let response: any;
    if (this.id) {
      response = await this.knowledgeService.updateKnowledgeBaseType({
        ...this.knowledgeBaseTypeForm.value,
        id: this.id
      });
    } else {
      response = await this.knowledgeService.createKnowledgeBaseType(
        this.knowledgeBaseTypeForm.value
      );
    }
    if (response) {
      this.messageService.create('success', '知识点类型编辑成功');
    }
    this.closeDialog();
  }

  async ngOnInit(): Promise<void> {
    this.knowledgeBaseTypeForm.patchValue({
      id: this.id ? this.id : '',
      name: this.name,
      key: this.key
    });
  }
}
