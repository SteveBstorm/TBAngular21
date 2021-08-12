import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  monTexte :string = ""

  @Input() title : string = ""
  @Input() contenu : string = ""

  @Output() monEvent : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  maMethode() {
    this.monEvent.emit(this.monTexte)
  }
              
}
