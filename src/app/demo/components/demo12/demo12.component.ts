import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogService } from '../log.service';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.scss']
})
export class Demo12Component implements OnInit {

  currentUser : string = ""
  localStorageUser : string = ""

  serviceCurrentUser : string = ""

  xCurrentUser : string = ""

  mySub : Subscription = new Subscription()

  constructor(
    private session : LogService
  ) { }

  ngOnInit(): void {
    this.mySub = this.session.userNameSubject.subscribe(
      (value : string) => {this.serviceCurrentUser = value}, //try /next
      (error) => {console.log(error)}, //catch / error
      () => {console.log("je passe ici quoiqu'il arrive")} //finally / complete
    )
    this.session.emitUserName()
    this.currentUser = sessionStorage.getItem('userName') ?? ""
    this.localStorageUser = localStorage.getItem('userName') ?? ""
  }

  login() {
    this.session.login()
    this.currentUser = sessionStorage.getItem('userName') ?? ""
    this.localStorageUser = localStorage.getItem('userName') ?? ""
  }

  logout() {
    this.session.logout()
    this.currentUser = sessionStorage.getItem('userName') ?? ""
    this.localStorageUser = localStorage.getItem('userName') ?? ""

    this.mySub.unsubscribe()
  }

}
