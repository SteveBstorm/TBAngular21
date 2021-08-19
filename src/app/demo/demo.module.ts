import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { SharedModule } from '../shared/shared.module';
import { Demo4Component } from './components/demo4/demo4.component';
import { Demo5Component } from './components/demo5/demo5.component';
import { Demo6Component } from './components/demo6/demo6.component';
import { EnfantComponent } from './components/demo6/enfant/enfant.component';
import { Demo7Component } from './components/demo7/demo7.component';
import { Demo8Component } from './components/demo8/demo8.component';
import { Demo9Component } from './components/demo9/demo9.component';
import { CibleComponent } from './components/demo9/cible/cible.component';
import { Demo10Component } from './components/demo10/demo10.component';
import { Demo11Component } from './components/demo11/demo11.component';
import { ResovledComponent } from './components/demo11/resovled/resovled.component';
import { Demo12Component } from './components/demo12/demo12.component';
import { Demo13Component } from './components/demo13/demo13.component';



@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    EnfantComponent,
    Demo7Component,
    Demo8Component,
    Demo9Component,
    CibleComponent,
    Demo10Component,
    Demo11Component,
    ResovledComponent,
    Demo12Component,
    Demo13Component,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ],
  bootstrap : [DemoComponent],
  providers : []
})
export class DemoModule { }
