/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../common/guard/auth.guard';
import { SectionComponent } from './section.component';
import { SectionListComponent } from './section.list/section.list.component';

const routes: Routes = [
  {
    path: '',
    component: SectionComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'domainList',
        component: SectionListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule {
}
