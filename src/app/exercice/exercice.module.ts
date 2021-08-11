import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { FormsModule } from '@angular/forms';
import { Exo1Component } from './components/exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './components/exo2/exo2.component';
import { ListeComponent } from './components/exo2/liste/liste.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exo1Component,
    Exo2Component,
    ListeComponent
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
