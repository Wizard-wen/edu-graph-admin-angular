/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// ng-zorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
// custom
import { PagesRoutingModule } from './pages.routing.module';
import { PagesComponent } from './pages.component';
import { QuestionModule } from './question/question.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
// utils
import { HttpRequestInterceptor } from '../common/interceptors';


const nzModules = [
  NzLayoutModule,
  NzMenuModule,
  NzIconModule,
  NzDropDownModule,
  NzAvatarModule
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ...nzModules,
    CommonModule,
    KnowledgeModule,
    QuestionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  declarations: [PagesComponent]
})
export class PagesModule {
}
