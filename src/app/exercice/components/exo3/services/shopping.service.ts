import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shoppingList : Article[] = []

  constructor() { }

  ajout(nom : string) {
    let index = this.shoppingList.findIndex((a) => a.nom == nom)
    if(index > -1)
      this.addQty(index)
    else this.shoppingList.push({nom : nom, qty : 1})
  }

  supprimer(index : number) {
    this.shoppingList.splice(index, 1)
  }

  addQty(index : number) {
    this.shoppingList[index].qty++
  }

  removeQty(index : number){
    if(this.shoppingList[index].qty > 1){
      this.shoppingList[index].qty--
    }
    else this.supprimer(index)
  }

}
