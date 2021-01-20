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
// custom
import { SectionComponent } from './section.component';
import { SectionRoutingModule } from './section.routing.module';
import { SectionListComponent } from './section.list/section.list.component';
import { SectionConfigComponent } from './section.list/section.config/section.config.component';

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
  NzMessageModule
];

@NgModule({
  declarations: [
    SectionComponent,
    SectionListComponent,
    SectionConfigComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SectionRoutingModule,
    ...nzModules
  ]
})
export class SectionModule {
}
