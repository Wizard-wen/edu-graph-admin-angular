/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../common/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'knowledge',
        loadChildren: () =>
          import('./knowledge/knowledge.module').then(
            module => module.KnowledgeModule
          )
      },
      {
        path: 'question',
        loadChildren: () =>
          import('./question/question.module').then(module => module.QuestionModule)
      },
      {
        path: 'domain',
        loadChildren: () =>
          import('./domain/domain.module').then(module => module.DomainModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
