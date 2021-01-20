/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not.found/not.found.component';
import { DomainConfigComponent } from './pages/domain/domain.config/domain.config.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then(module => module.PagesModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'domain/config', component: DomainConfigComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
