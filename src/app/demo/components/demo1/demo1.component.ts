import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  maProp : string = "Salut"

  constructor() { }

  ngOnInit(): void {
  }

  maMethode() : void {
    this.maProp = "j'ai envie de changer"
  }

}
