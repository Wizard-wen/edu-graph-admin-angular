/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { NgModule } from '@angular/core';
import { QuestionComponent } from './question.component';
import { QuestionRoutingModule } from './question.routing.module';

@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    QuestionRoutingModule,
  ]
})
export class QuestionModule {
}
