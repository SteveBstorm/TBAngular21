import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien : Link[] = []

  constructor() { }

  ngOnInit(): void {
    this.listeLien = [
      {url : 'home', title : 'Home'},
      {url : 'about', title : 'About'},
      {title : 'Demos' , children : [
        {url : 'demo/demo1', title : 'Demo 1 - Property bindings'},
        {url : 'demo/demo2', title : 'Demo 2 - Event bindings'},
        {url : 'demo/demo3', title : 'Demo 3 - Pipes'},
        {url : 'demo/demo4', title : 'Demo 4 - Compenent Directives'},
        {url : 'demo/demo5', title : 'Demo 5 - Structural Directives'},

      ]},
      {title : 'Exercices', children : [
        {url : 'exercice/exo1', title : 'Chronomètre'}
      ]}
    ]
  }

  toggleVisible(index : number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible 
  }

}
