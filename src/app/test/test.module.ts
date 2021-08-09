import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { Test1Component } from '../test/test1/test1.component';
import { TestComponent } from '../test/test.component';


@NgModule({
  declarations: [
    Test1Component,
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  bootstrap : [TestComponent]
})
export class TestModule { }
