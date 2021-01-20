/**
 * @author songxiwen
 * @date 2020/09/14
 */

import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { KnowledgeService } from '../../../service';
import { KnowledgeBaseType, KnowledgeType } from '../../../common/types';
import { KnowledgeEdgeConfigComponent } from '../knowledge.edge.config.dialog/knowledge.edge.config.component';
import G6 from '@antv/g6';

@Component({
  selector: 'edu-knowledge-config',
  templateUrl: './knowledge.config.component.html',
  styleUrls: ['./knowledge.config.component.scss']
})
export class KnowledgeConfigComponent implements OnInit, AfterViewInit {
  id = '';

  edgeList: {
    id: string;
    originKnowledge: string;
    targetKnowledge: string;
    Knowledge: string;
  }[] | undefined;

  knowledgeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    knowledgeBaseTypeId: ['', [Validators.required]],
  });

  pageIndex = 1;

  pageSize = 10;

  total = 0;

  knowledgeBaseTypeList: KnowledgeBaseType[] = [];

  knowledgeList: KnowledgeType[] = [];
  g6Data: any = {};

  content = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly messageService: NzMessageService,
    private readonly knowledgeService: KnowledgeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly modalService: NzModalService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  async createKnowledgeEdge() {
    const modalRef = this.modalService.create({
      nzWidth: 750,
      nzTitle: '创建知识关联',
      nzContent: KnowledgeEdgeConfigComponent,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        id: this.id
      }
    });
    await modalRef.afterClose.subscribe(async () => {
      // todo
    });
  }

  async handlePageIndexChange(page: number): Promise<void> {
  }

  async getKnowledgeBaseTypeList() {
    const response = await this.knowledgeService.getKnowledgeBaseTypeList();
    this.knowledgeBaseTypeList = response.data;
  }

  async getKnowledgeList() {
    const response = await this.knowledgeService.getKnowledgeList();
    this.knowledgeList = response.data;
  }

  async submitDomainForm(): Promise<void> {
    Object.keys(this.knowledgeForm.controls).forEach((item: string) => {
      this.knowledgeForm.controls[item].markAsDirty();
      this.knowledgeForm.controls[item].updateValueAndValidity();
    });
    const invalidFormItem = Object.keys(this.knowledgeForm.controls).find(
      (item: string) => (this.knowledgeForm.controls[item].status === 'INVALID')
    );
    if (invalidFormItem) {
      this.messageService.create('error', 'Element form not fulled');
      return;
    }
    let response: any;
    if (this.id) {
      response = await this.knowledgeService.updateKnowledge({
        ...this.knowledgeForm.value,
        id: this.id
      });
    } else {
      response = await this.knowledgeService.createKnowledge(
        this.knowledgeForm.value
      );
    }
    if (response) {
      this.messageService.create('success', 'success');
    }
  }

  private renderGraph() {
    this.g6Data = {};
    this.g6Data.edges = this.edgeList;
    this.g6Data.nodes = this.knowledgeList.map(item => ({
      ...item,
      label: item.name,
    }));
    const graph = new G6.Graph({
      container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
      // 画布宽高
      width: 650,
      height: 450,
      defaultNode: {
        type: 'rect',
        // size: [100, 50],
        // style: {
        //   lineWidth: 2,
        //   fill: '#DEE9FF',
        //   stroke: '#5B8FF9',
        // },
      },
      layout: {
        type: 'radial',
        center: [ 400, 150 ],     // 可选，默认为图的中心
        linkDistance: 50,         // 可选，边长
        maxIteration: 1000,       // 可选
        focusNode: 'node11',      // 可选
        unitRadius: 100,          // 可选
        preventOverlap: true,     // 可选，必须配合 nodeSize
        nodeSize: 30,             // 可选
        strictRadial: false,       // 可选
        workerEnabled: true       // 可选，开启 web-worker
      },
      defaultEdge: {
        size: 1,
        // style: {
        //   stroke: '#e2e2e2',
        //   lineAppendWidth: 2,
        // },
      },
    });
    // 读取数据
    graph.data(this.g6Data);
    // 渲染图
    graph.render();
  }
  getConfig() {
    return {
      suffix: '.min',
      height: 700,
      language_url: 'assets/langs/zh_CN.js',
      language: 'zh_CN',
      branding: false,
      plugins: [
        'image', 'link', 'code', 'lists', 'advlist', 'autolink', 'wordcount', 'paste',
        'fullscreen', 'hr', 'media', 'preview', 'searchreplace', 'table', 'codesample', 'indent2em'
      ],
      toolbar: [
        'undo redo | link image media blockquote hr | searchreplace code fullscreen preview | ',
        'forecolor | backcolor | styleselect | bold italic underline strikethrough | indent2em alignleft' +
        ' aligncenter alignright alignjustify | bullist numlist | table wordcount codesample',
      ],

    }
  }
  async ngOnInit(): Promise<void> {
    await this.route.queryParams.subscribe(async (queryParams) => {
      console.log(queryParams);
      const response: any = await this.knowledgeService.getKnowledgeById({ id: queryParams.knowledgeId });
      this.id = queryParams.knowledgeId;
      this.knowledgeForm.patchValue({
        name: response.data.knowledge.name,
        knowledgeBaseTypeId: response.data.knowledge.knowledgeBaseTypeId
      });
      this.edgeList = response.data.edgeList;
    });
    await this.getKnowledgeBaseTypeList();
    await this.getKnowledgeList();
    this.changeDetectorRef.detectChanges();
    this.renderGraph();
  }

  async ngAfterViewInit() {
  }
}
