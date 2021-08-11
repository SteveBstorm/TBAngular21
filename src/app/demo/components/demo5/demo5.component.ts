import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  isToggled : boolean = false;

  maProp : string = ""

  liste : string[] = ["Pokemon", "Final fantasy", "Street Fighter", "Kingdom Hearts", "Duke Nukem 3D"]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isToggled = !this.isToggled
  }

}
