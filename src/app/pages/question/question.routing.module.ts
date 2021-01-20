/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../common/guard/auth.guard';
import { QuestionComponent } from './question.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'adminRouterAuthList',
      //   component: AdminRouterAuthListComponent
      // },
      // {
      //   path: 'adminAPIAuthList',
      //   component: AdminAPIAuthListComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule {
}
