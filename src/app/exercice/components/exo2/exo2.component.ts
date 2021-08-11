import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  listeArticle : string[] = []

  article : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  ajouter() {
    this.listeArticle.push(this.article)
    this.article = ""
  }

  retirer(index : number){
    this.listeArticle.splice(index, 1)
  }

}
