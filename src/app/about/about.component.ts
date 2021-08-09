import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  texte : string | null = null
  public nombre : number = 0
  date : Date = new Date();
  booleen : boolean = true;
  truc : any
  und : undefined 

  constructor() { }

  ngOnInit(): void {
    this.texte = "coucou"
    this.truc = new Contact()
  }

  protected maMethode() : string | string[] | null {
    return null
  }

}

export class Contact implements IContact {
  inscrire(nom: string): void {
    throw new Error('Method not implemented.');
  }
  nom? : string
}

export interface IContact {
  inscrire(nom : string) : void
}