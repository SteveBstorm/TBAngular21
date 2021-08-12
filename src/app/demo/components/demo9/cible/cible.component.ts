import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cible',
  templateUrl: './cible.component.html',
  styleUrls: ['./cible.component.scss']
})
export class CibleComponent implements OnInit {

  parameterFromRoute : number = 0

  constructor(
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.parameterFromRoute = this._activatedRoute.snapshot.params['toto']
  }

}
