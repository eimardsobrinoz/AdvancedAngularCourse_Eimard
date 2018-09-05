import { Directive, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[BkgToSpans]'
})
export class BkgToSpansDirective implements OnInit {
  el: any;
  spanList: ElementRef[];
  h4List: ElementRef[];
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.el = element.nativeElement;
   }

  ngOnInit(): void {
    this.spanList = this.el.querySelectorAll('span');
    this.spanList.forEach(span => {
      this.renderer.setStyle(span, 'background', 'red');
    });

    this.h4List = this.el.querySelectorAll('h4');
    this.h4List.forEach(h4 => {
      this.renderer.listen(h4, 'dblclick', (event) => {
        console.log('Has hecho doble click sobre un h4', event);
        this.renderer.addClass(h4, 'active');
      });
      this.renderer.listen(h4, 'click', (event) => {
        event.preventDefault();
      });
    });
  }
}
