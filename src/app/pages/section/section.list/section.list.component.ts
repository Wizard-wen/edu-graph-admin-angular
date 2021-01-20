/**
 * @author wizard.song
 * @date 2020/09/14 17:49
 */

import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DomainService } from '../../../service';
import { SectionConfigComponent } from './section.config/section.config.component';

@Component({
  selector: 'edu-section-list',
  templateUrl: './section.list.component.html',
  styleUrls: ['./section.list.component.scss']
})
export class SectionListComponent implements AfterViewInit {
  sectionList = [];

  isLoading = false;

  pageIndex = 1;

  pageSize = 10;

  total = 0;

  constructor(
    private readonly domainService: DomainService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly modalService: NzModalService
  ) {
  }

  async handlePageIndexChange(event: any): Promise<void> {
    await this.getSectionList(event, 10);
  }

  removeSection(data: any) {
    this.modalService.confirm({
      nzTitle: '您确认要删除这个单元吗?',
      nzOnOk: async () => {
        await this.domainService.removeDomain({
          id: data.id
        });
        await this.getSectionList();
      }
    });
  }

  async getSectionList(page = 1, pageSize = 10): Promise<void> {
    this.isLoading = true;
    this.changeDetectorRef.detectChanges();
    this.pageIndex = page;
    const response: any = await this.domainService.getDomainPageList({
      pageId: this.pageIndex - 1,
      pageSize
    });
    console.log(response);
    this.sectionList = response.data.pageList;
    this.total = response.data.total;
    this.isLoading = false;
    this.changeDetectorRef.detectChanges();
  }

  async createDomain(): Promise<void> {
    const modalRef = this.modalService.create({
      nzWidth: 750,
      nzTitle: '创建领域',
      nzContent: SectionConfigComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        name: '',
        description: ''
      }
    });
    await modalRef.afterClose.subscribe(async () => {
      await this.getSectionList(1, 10);
    });
  }

  async updateSection(data: any): Promise<void> {
    const modalRef = this.modalService.create({
      nzWidth: 750,
      nzTitle: '编辑领域',
      nzContent: SectionConfigComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        ...data
      }
    });
    await modalRef.afterClose.subscribe(async () => {
      await this.getSectionList();
    });
  }

  async ngAfterViewInit(): Promise<void> {
    await this.getSectionList(1, 10);
  }
}
