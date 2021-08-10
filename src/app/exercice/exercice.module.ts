import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { FormsModule } from '@angular/forms';
import { Exo1Component } from './components/exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exo1Component
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule,
    SharedModule
  ],
  bootstrap : [ExerciceComponent]
})
export class ExerciceModule { }
