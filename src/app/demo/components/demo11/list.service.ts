import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  maListe : string[] = ['Salut', 'Bonjour', 'Coucou']

  constructor() { }

  getList() : string[] {
    return this.maListe
  }

  getOne(index : number) : string {
    return this.maListe[index]
  }
}
