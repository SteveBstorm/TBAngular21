import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  isConnected! : boolean
  userName : string = ""

  userNameSubject : Subject<string> = new Subject<string>()

  behavionUserName : BehaviorSubject<string> = new BehaviorSubject("valeur de mon subject")

  emitUserName() {
    this.userNameSubject.next(this.userName)
  }

  emitBehavior() {
    this.behavionUserName.next(this.userName)
  }

  constructor() { }

  login() {
    this.userName = "steve"
    this.emitUserName()
    this.emitBehavior()
    sessionStorage.setItem('userName', this.userName)
    localStorage.setItem('userName', this.userName)
  }
  logout() {
    this.userName = ""
    this.emitUserName()
    this.emitBehavior()
    sessionStorage.removeItem('userName')
    localStorage.removeItem('userName')
  }
}
