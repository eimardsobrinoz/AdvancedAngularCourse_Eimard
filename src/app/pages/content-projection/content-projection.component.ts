// tslint:disable-next-line:max-line-length
import { Component, OnInit, ViewChild, ViewChildren, ElementRef, AfterViewInit,  Renderer, ContentChildren, QueryList } from '@angular/core';
import { HijoComponent } from './hijo.component';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styles: [
    `
    .rojo {
      color: red;
    }
   `
 ]
})
export class ContentProjectionComponent implements OnInit, AfterViewInit {

  @ViewChildren(HijoComponent) public hijos: QueryList<HijoComponent>;

  @ViewChild('titulo') h3: ElementRef;
  constructor(private rederer: Renderer) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('Manipulando color del título desde el padre', this.h3);

    this.rederer.listen(this.h3.nativeElement, 'mouseover', () => {
      this.rederer.setElementStyle(this.h3.nativeElement, 'color', 'yellow');
    });
    this.rederer.listen(this.h3.nativeElement, 'mouseout', () => {
      this.rederer.setElementStyle(this.h3.nativeElement, 'color', 'red');
    });
    console.log('%c Elementos hijos (ViewChildren)', 'color: green', this.hijos);
  }

}
