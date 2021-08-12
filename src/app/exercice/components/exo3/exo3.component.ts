import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  shoppingList : Article[] = []

  article : string = ""

  constructor(
    private _service : ShoppingService
  ) { }

  ngOnInit(): void {
    this.shoppingList = this._service.shoppingList
  }

  ajout(){
    this._service.ajout(this.article)
    this.article = ""
  }
  supprimer(index : number) {
    this._service.supprimer(index)
  }

  addQty(index : number) {
    this._service.addQty(index)
  }

  remQty(index : number) {
    this._service.removeQty(index)
  }

}
