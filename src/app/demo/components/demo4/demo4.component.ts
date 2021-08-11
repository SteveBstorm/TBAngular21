import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  currentStyle : any;

  test : boolean = true

  italic : boolean = false;
  bold : boolean = false;
  size : boolean = false;

  class : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentStyle()
  }
  setCurrentStyle() {
    this.currentStyle= {
      'font-style' : this.italic ? 'italic' : 'normal',
      'font-weight' : this.bold ? 'bold' : 'normal',
      'font-size' : this.size ? '24px' : '12px'
    }
  }

  switchItalic() {
    this.italic = !this.italic
    this.setCurrentStyle()
  }
  switchBold() {
    this.bold = !this.bold
    this.setCurrentStyle()
  }
  switchSize() {
    this.size = !this.size
    this.setCurrentStyle()
  }
  
  switchClass() {
    this.class = !this.class
  }

}
