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
      {title : "titre", url : "demo/demo1", },
      
    ]
  }

}
