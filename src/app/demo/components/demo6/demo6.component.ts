import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  messageDuChildren : string = ""

  texte : string = "Des infos pour l'enfant"

  constructor() { }

  ngOnInit(): void {
  }

  reponseDuChildren(s: string) {
    this.messageDuChildren = s
  }
}
