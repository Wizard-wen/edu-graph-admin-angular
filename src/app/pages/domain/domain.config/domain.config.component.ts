/**
 * @author wizard.song
 * @date 2020/09/14 17:49
 */

import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DomainService } from '../../../service';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'edu-domain-config',
  templateUrl: './domain.config.component.html',
  styleUrls: ['./domain.config.component.scss']
})
export class DomainConfigComponent implements AfterViewInit {
  hGutter = 16;
  vGutter = 16;
  count = 4;
  array = new Array(this.count);

  constructor(
    private readonly domainService: DomainService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly modalService: NzModalService
  ) {
  }

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          expanded: true,
          children: [
            { title: 'leaf', key: '10010', isLeaf: true },
            { title: 'leaf', key: '10011', isLeaf: true },
            { title: 'leaf', key: '10012', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        },
        {
          title: 'parent 1-2',
          key: '1003',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        }
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  async ngAfterViewInit(): Promise<void> {
  }
}
