import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss'],
})
export class Demo7Component implements OnInit {

  LocalIsConnected : boolean = false

  constructor(
    private _authService : FakeAuthService
  ) { }

  ngOnInit(): void {
    this.LocalIsConnected = this._authService.isConnected
  }

  login() {
    this._authService.connect()
    this.LocalIsConnected = this._authService.isConnected
  }  

  logout() {
    this._authService.disconnect()
    this.LocalIsConnected = this._authService.isConnected

  }

}
