import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from './list.service';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component implements OnInit {

  liste : string[] = []
  constructor(
    private _service : ListService,
    private _router : Router
    ) { }

  ngOnInit(): void {
    this.liste = this._service.getList()
  }

  redirect(index : number) {
    this._router.navigate(['demo/resolved/'+index])
    console.log("je clique")
  }

}
