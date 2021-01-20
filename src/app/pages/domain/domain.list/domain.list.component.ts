/**
 * @author wizard.song
 * @date 2020/09/14 17:49
 */

import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DomainService } from '../../../service';
import { DomainConfigDialogComponent } from './domain.config.dialog/domain.config.dialog.component';

@Component({
  selector: 'edu-domain-list',
  templateUrl: './domain.list.component.html',
  styleUrls: ['./domain.list.component.scss']
})
export class DomainListComponent implements AfterViewInit {
  domainList = [];

  isLoading = false;

  pageIndex = 1;

  pageSize = 10;

  total = 0;

  constructor(
    private readonly domainService: DomainService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly modalService: NzModalService,
    private readonly router: Router
  ) {
  }

  async handlePageIndexChange(event: any): Promise<void> {
    await this.getDomainList(event, 10);
  }

  removeDomain(data: any) {
    this.modalService.confirm({
      nzTitle: '您确认要删除这个知识点吗?',
      nzOnOk: async () => {
        await this.domainService.removeDomain({
          id: data.id
        });
        await this.getDomainList();
      }
    });
  }

  async configDomain(data: any) {
    await this.router.navigate(['/domain/config'], {
      queryParams: {
        domainId: data.id
      }
    });
  }

  private async getDomainList(page = 1, pageSize = 10): Promise<void> {
    this.isLoading = true;
    this.changeDetectorRef.detectChanges();
    this.pageIndex = page;
    const response: any = await this.domainService.getDomainPageList({
      pageId: this.pageIndex - 1,
      pageSize
    });
    this.domainList = response.data.pageList;
    this.total = response.data.total;
    this.isLoading = false;
    this.changeDetectorRef.detectChanges();
  }

  async createDomain(): Promise<void> {
    const modalRef = this.modalService.create({
      nzWidth: 750,
      nzTitle: '创建领域',
      nzContent: DomainConfigDialogComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        name: '',
        description: ''
      }
    });
    await modalRef.afterClose.subscribe(async () => {
      await this.getDomainList(1, 10);
    });
  }

  async updateDomain(data: any): Promise<void> {
    const modalRef = this.modalService.create({
      nzWidth: 750,
      nzTitle: '编辑领域',
      nzContent: DomainConfigDialogComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        ...data
      }
    });
    await modalRef.afterClose.subscribe(async () => {
      await this.getDomainList();
    });
  }

  async ngAfterViewInit(): Promise<void> {
    await this.getDomainList(1, 10);
  }
}
