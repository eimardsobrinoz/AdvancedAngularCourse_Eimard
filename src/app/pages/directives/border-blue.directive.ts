import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[borderBlue]'
})
export class BorderBlueDirective implements OnInit {
  el: any;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.el = element.nativeElement;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el, 'border', '2px solid blue');
  }

}
