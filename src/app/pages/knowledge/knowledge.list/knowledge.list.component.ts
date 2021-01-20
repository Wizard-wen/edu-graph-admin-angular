/**
 * @author songxiwen
 * @date 2020/09/14 17:49
 */

import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { KnowledgeService } from '../../../service';
import { KnowledgeType } from '../../../common/types';

@Component({
  selector: 'edu-knowledge-list',
  templateUrl: './knowledge.list.component.html',
  styleUrls: ['./knowledge.list.component.scss']
})
export class KnowledgeListComponent implements AfterViewInit {
  knowledgeList: KnowledgeType[] = [];

  isLoading = false;

  pageIndex = 1;

  pageSize = 10;

  total = 0;

  constructor(
    private readonly knowledgeService: KnowledgeService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly modalService: NzModalService,
    private readonly router: Router
  ) {
  }

  async handlePageIndexChange(page: number): Promise<void> {
    await this.getKnowledgeList(page, 10);
  }

  removeKnowledge(data: KnowledgeType) {
    this.modalService.confirm({
      nzTitle: '您确认要删除这个知识点吗?',
      nzOnOk: async () => {
        if (!data.id) {
          return;
        }
        await this.knowledgeService.removeKnowledgeById({
          id: data.id
        });
        await this.getKnowledgeList();
      }
    });
  }

  private async getKnowledgeList(page = 1, pageSize = 10): Promise<void> {
    this.isLoading = true;
    this.changeDetectorRef.detectChanges();
    this.pageIndex = page;
    const response: {
      data: {
        pageList: KnowledgeType[],
        total: number
      },
      code: number
    } = await this.knowledgeService.getKnowledgePageList({ page: page - 1, pageSize });
    this.knowledgeList = response.data.pageList;
    this.total = response.data.total;
    this.isLoading = false;
    this.changeDetectorRef.detectChanges();
  }

  async configKnowledge(data: KnowledgeType): Promise<void> {
    await this.router.navigate(['/pages/knowledge/knowledgeConfig'], {
      queryParams: {
        knowledgeId: data.id
      }
    });
  }

  async createKnowledge(): Promise<void> {
    await this.router.navigate(['/pages/knowledge/knowledgeConfig']);
  }

  async ngAfterViewInit(): Promise<void> {
    await this.getKnowledgeList(1, 10);
  }
}
