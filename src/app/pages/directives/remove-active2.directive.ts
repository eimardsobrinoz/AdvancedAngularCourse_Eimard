import { Directive, Renderer2, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[RemoveActive2]'
})
export class RemoveActive2Directive implements OnInit {
  el: any;
  listP: any[];

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    this.el = element.nativeElement;
  }


  ngOnInit() {
    this.listP = this.el.querySelectorAll('p');
    this.listP.forEach(element => {
      this.renderer2.listen(element, 'click', () => {
        console.log('Eliminando elemento', element.classList.contains('activee'));
        if (element.classList.contains('active2')) {
           this.renderer2.selectRootElement(element).remove();
        }
      });
    });
  }


}
