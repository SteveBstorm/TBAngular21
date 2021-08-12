import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-liste-exo3',
  templateUrl: './liste-exo3.component.html',
  styleUrls: ['./liste-exo3.component.scss']
})
export class ListeExo3Component implements OnInit {

  @Input() listeArticle : Article[] = []

  @Output() ajoutQty : EventEmitter<number> = new EventEmitter<number>()
  @Output() retirerQty : EventEmitter<number> = new EventEmitter<number>()
  @Output() delete : EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  addQty(index : number) {
    this.ajoutQty.emit(index)
  }
  remQty(index : number) {
    this.retirerQty.emit(index)
  }

  supprimer(index : number) {
    this.delete.emit(index)
  }

}
