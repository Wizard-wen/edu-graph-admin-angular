/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

// ng
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTreeModule } from 'ng-zorro-antd/tree';
// custom
import { DomainComponent } from './domain.component';
import { DomainRoutingModule } from './domain.routing.module';
import { DomainListComponent } from './domain.list/domain.list.component';
import { DomainConfigDialogComponent } from './domain.list/domain.config.dialog/domain.config.dialog.component';

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
  NzMessageModule,
  NzTreeModule
];

@NgModule({
  declarations: [
    DomainComponent,
    DomainListComponent,
    DomainConfigDialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DomainRoutingModule,
    ...nzModules
  ]
})
export class DomainModule {
}
