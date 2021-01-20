/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

// ng
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzDescriptionsModule, NzPageHeaderModule } from 'ng-zorro-antd';
import {BrowserModule} from '@angular/platform-browser';
// ng-zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
// custom
import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeRoutingModule } from './knowledge.routing.module';
import { KnowledgeListComponent } from './knowledge.list/knowledge.list.component';
import { KnowledgeConfigComponent } from './knowledge.config/knowledge.config.component';
import { KnowledgeBaseTypeListComponent } from './knowledge.base.type.list/knowledge.base.type.list.component';
import { KnowledgeBaseTypeConfigComponent } from './knowledge.base.type.list/knowledge.base.type.config/knowledge.base.type.config.component';
import { KnowledgeEdgeConfigComponent } from './knowledge.edge.config.dialog/knowledge.edge.config.component';

import { EditorModule } from '@tinymce/tinymce-angular';

const nzModules = [
  NzTableModule,
  NzSpaceModule,
  NzSpinModule,
  NzIconModule,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzSwitchModule,
  NzSelectModule,
  NzModalModule,
  NzInputNumberModule,
  NzRadioModule,
  NzCardModule
];

@NgModule({
  declarations: [
    KnowledgeComponent,
    KnowledgeListComponent,
    KnowledgeConfigComponent,
    KnowledgeBaseTypeListComponent,
    KnowledgeBaseTypeConfigComponent,
    KnowledgeEdgeConfigComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    KnowledgeRoutingModule,
    ...nzModules,
    NzPageHeaderModule,
    NzDescriptionsModule,
    // BrowserModule,
    EditorModule
  ]
})
export class KnowledgeModule {
}
