import { Injectable } from '@angular/core';
import { Demo7Component } from 'src/app/demo/components/demo7/demo7.component';
import { DemoModule } from 'src/app/demo/demo.module';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  isConnected : boolean = false

  constructor() { }

  connect() {
    this.isConnected = true
  }

  disconnect() {
    this.isConnected = false
  }
}
