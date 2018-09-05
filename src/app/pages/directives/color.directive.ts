import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[color]'
})
export class ColorDirective implements OnInit {
  @Input('color') color: string;
  el: any;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.el = element.nativeElement;
  }

  ngOnInit(): void {
    this.role = 'hostBinding';
    setTimeout( () => {
      this.activo = true;
      this.renderer.setStyle(this.el, 'border', `3px solid ${this.color}`);
    }, 5000);
  }

  // tslint:disable-next-line:member-ordering
  @HostBinding('attr.role') role: string;
  // tslint:disable-next-line:member-ordering
  @HostBinding('class.active') activo: boolean;

}
