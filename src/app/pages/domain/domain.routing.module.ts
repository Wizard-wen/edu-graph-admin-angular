/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../common/guard/auth.guard';
import { DomainComponent } from './domain.component';
import { DomainListComponent } from './domain.list/domain.list.component';

const routes: Routes = [
  {
    path: '',
    component: DomainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'domainList',
        component: DomainListComponent
      },
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
export class DomainRoutingModule {
}
