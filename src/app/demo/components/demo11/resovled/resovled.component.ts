import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resovled',
  templateUrl: './resovled.component.html',
  styleUrls: ['./resovled.component.scss']
})
export class ResovledComponent implements OnInit {

  objetResolu : string = ""

  constructor(
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("je charge le composant")
    this.objetResolu = this._activatedRoute.snapshot.data['monObjet']
  }

}
