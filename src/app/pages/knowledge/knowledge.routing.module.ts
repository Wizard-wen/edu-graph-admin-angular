/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../common/guard/auth.guard';
import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeListComponent } from './knowledge.list/knowledge.list.component';
import { KnowledgeBaseTypeListComponent } from './knowledge.base.type.list/knowledge.base.type.list.component';
import { KnowledgeConfigComponent } from './knowledge.config/knowledge.config.component';

const routes: Routes = [
  {
    path: '',
    component: KnowledgeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'knowledgeList',
        component: KnowledgeListComponent
      },
      {
        path: 'knowledgeConfig',
        component: KnowledgeConfigComponent
      },
      {
        path: 'knowledgeBaseTypeList',
        component: KnowledgeBaseTypeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeRoutingModule {
}
