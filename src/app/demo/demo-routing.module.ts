import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {path : '', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
