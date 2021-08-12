import { Component } from '@angular/core';
import { Link } from './shared/models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Mon premier projet';

  listeLien : Link[] = [
    {url : 'home', title : 'Home'},
    {url : 'about', title : 'About'},
    {title : 'Demos' , children : [
      {url : 'demo/demo1', title : 'Demo 1 - Property bindings'},
      {url : 'demo/demo2', title : 'Demo 2 - Event bindings'},
      {url : 'demo/demo3', title : 'Demo 3 - Pipes'},
      {url : 'demo/demo4', title : 'Demo 4 - Compenent Directives'},
      {url : 'demo/demo5', title : 'Demo 5 - Structural Directives'},
      {url : 'demo/demo6', title : 'Demo 6 - @Input / @Output'},
      {url : 'demo/demo7', title : 'Demo 7 - Service et Injection'},
      

    ]},
    {title : 'Exercices', children : [
      {url : 'exercice/exo1', title : 'Chronomètre'},
      {url : 'exercice/exo2', title : 'Shopping List'},
      {url : 'exercice/exo3', title : 'Shopping List++'},
    ]}
  ]
}
