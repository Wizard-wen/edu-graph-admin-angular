/**
 * @author songxiwen
 * @date 2020/09/14 17:49
 */

import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { KnowledgeService } from '../../../service';
import { KnowledgeBaseTypeConfigComponent } from './knowledge.base.type.config/knowledge.base.type.config.component';
import { KnowledgeBaseType } from '../../../common/types';

@Component({
  selector: 'edu-knowledge-base-type-list',
  templateUrl: './knowledge.base.type.list.component.html',
  styleUrls: ['./knowledge.base.type.list.component.scss']
})
export class KnowledgeBaseTypeListComponent implements AfterViewInit {
  KnowledgeBaseTypeList: KnowledgeBaseType[] = [];

  isLoading = false;

  pageIndex = 1;

  pageSize = 10;

  total = 0;

  constructor(
    private readonly knowledgeService: KnowledgeService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly modalService: NzModalService
  ) {
  }

  async handlePageIndexChange(page: number): Promise<void> {
    await this.getKnowledgeBaseTypeList(page, 10);
  }

  removeKnowledgeBaseType(data: KnowledgeBaseType) {
    this.modalService.confirm({
      nzTitle: '您确认要删除这个知识点类型吗?',
      nzOnOk: async () => {
        if (!data.id) {
          return;
        }
        await this.knowledgeService.removeKnowledgeBaseTypeById({
          id: data.id
        });
        await this.getKnowledgeBaseTypeList();
      }
    });
  }

  private async getKnowledgeBaseTypeList(page = 1, pageSize = 10): Promise<void> {
    this.isLoading = true;
    this.changeDetectorRef.detectChanges();
    this.pageIndex = page;
    const response: {
      data: {
        pageList: KnowledgeBaseType[],
        total: number
      },
      code: number
    } = await this.knowledgeService.getKnowledgeBaseTypePageList({ page: page - 1, pageSize });
    this.KnowledgeBaseTypeList = response.data.pageList;
    this.total = response.data.total;
    this.isLoading = false;
    this.changeDetectorRef.detectChanges();
  }

  async createKnowledgeBaseType(): Promise<void> {
    const modalRef = this.modalService.create({
      nzWidth: 750,
      nzTitle: '创建知识点类型',
      nzContent: KnowledgeBaseTypeConfigComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        name: '',
        key: ''
      }
    });
    await modalRef.afterClose.subscribe(async () => {
      await this.getKnowledgeBaseTypeList(1, 10);
    });
  }

  async updateKnowledgeBaseType(data: KnowledgeBaseType): Promise<void> {
    const modalRef = this.modalService.create({
      nzWidth: 750,
      nzTitle: '编辑知识点',
      nzContent: KnowledgeBaseTypeConfigComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        ...data
      }
    });
    await modalRef.afterClose.subscribe(async () => {
      await this.getKnowledgeBaseTypeList();
    });
  }

  async ngAfterViewInit(): Promise<void> {
    await this.getKnowledgeBaseTypeList(1, 10);
  }
}
