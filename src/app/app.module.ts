/**
 * @author wizard.song
 * @date 2020/09/19 16:49
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzPageHeaderModule, NzTreeModule } from 'ng-zorro-antd';
//
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
//
import { NotFoundComponent } from './pages/not.found/not.found.component';
import { LoginComponent } from './pages/login/login.component';
import { DomainConfigComponent } from './pages/domain/domain.config/domain.config.component';
import { PagesModule } from './pages/pages.module';
import { IconsProviderModule } from './icons-provider.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(en);
const customPageComponent = [
  LoginComponent,
  NotFoundComponent,
  DomainConfigComponent
];
const nzModules = [
  NzLayoutModule,
  NzMenuModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzCardModule,
  NzResultModule,
  NzModalModule,
  NzMessageModule,
  NzTableModule,
  NzSpaceModule,
  NzSpinModule,
  NzIconModule,
  NzSwitchModule,
  NzSelectModule,
  NzInputNumberModule,
  NzDropDownModule,
  NzAvatarModule
];

@NgModule({
  declarations: [
    AppComponent,
    ...customPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...nzModules,
    PagesModule,
    NzTreeModule,
    NzPageHeaderModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
