/**
 * @author songxiwen
 * @date 2020/09/14
 */

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DomainService } from '../../../../service';

@Component({
  selector: 'edu-domain-config-dialog',
  templateUrl: './section.config.component.html',
  styleUrls: ['./section.config.component.scss']
})
export class SectionConfigComponent implements OnInit {
  @Input()
  id?: string;

  @Input()
  name: string | undefined;

  @Input()
  description: string | undefined;

  domainForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['']
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly modalRef: NzModalRef,
    private readonly messageService: NzMessageService,
    private readonly domainService: DomainService
  ) {
  }

  closeDialog(): void {
    this.modalRef.destroy();
  }

  async submitDomainForm(): Promise<void> {
    Object.keys(this.domainForm.controls).forEach((item: string) => {
      this.domainForm.controls[item].markAsDirty();
      this.domainForm.controls[item].updateValueAndValidity();
    });
    const invalidNumber = Object.keys(this.domainForm.controls).reduce(
      (previousValue: number, currentValue: string) => {
        if (
          this.domainForm.controls[currentValue].status === 'INVALID'
        ) {
          previousValue += 1;
          return previousValue;
        }
        return previousValue;
      },
      0
    );
    if (invalidNumber > 0) {
      this.messageService.create('error', 'Element form not fulled');
      return;
    }
    let response: any;
    if (this.id) {
      response = await this.domainService.updateDomain({
        ...this.domainForm.value,
        id: this.id
      });
    } else {
      response = await this.domainService.createDomain(
        this.domainForm.value
      );
    }
    if (response) {
      this.messageService.create('success', 'success');
    }
    this.closeDialog();
  }

  async ngOnInit(): Promise<void> {
    this.domainForm.patchValue({
      id: this.id ? this.id : '',
      name: this.name,
      description: this.description
    });
  }
}
