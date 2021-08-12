import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  parameter : number = 42

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {

  }

  redirect() {
    this._router.navigate(['demo/cible/'+this.parameter])
  }

}
