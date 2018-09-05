import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '.active'
})
export class RemoveActivesDirective {
  el: any;

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    this.el = element.nativeElement;
  }


  @HostListener('click', ['$event']) removeActives() {
    console.log('Eliminando elemento', event);
    this.renderer2.selectRootElement(this.el).remove();
  }



}
