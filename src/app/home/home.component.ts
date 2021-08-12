import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakeAuthService } from '../shared/services/fake-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  HomeIsConnected : boolean = false

  constructor(
    private _authService : FakeAuthService
  ) { }
  
  ngOnInit(): void {
    this.HomeIsConnected = this._authService.isConnected
  }

}
