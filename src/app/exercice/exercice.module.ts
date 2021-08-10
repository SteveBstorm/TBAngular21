import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExerciceComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule
  ],
  bootstrap : [ExerciceComponent]
})
export class ExerciceModule { }
