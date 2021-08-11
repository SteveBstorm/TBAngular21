import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSurligner]'
})
export class SurlignerDirective {

  constructor(
    private el : ElementRef
  ) { }

  @HostListener('mouseenter') mouseEnter() {
    this.surligner('red')
  }

  @HostListener('mouseleave') mouseLeave() {
    this.surligner('')
  }

  private surligner(color : string) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
