import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styles: [`
    :host {
      border:3px solid black;
      padding:20px;
      height: 200px;
      background:#c30e2e45;
      display:block;
      overflow-y: scroll;
    }
    .fieldsetScroll{
      border:1px solid black;
      padding:10px;
    }
  `]
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('scroll', ['$event']) scroll(event) {
    console.log('Evento del evento capatado desde el propio componente: ', event);
    let scrollOffset = event.srcElement.scrollTop;
    alert(`scroll detectado desde el propio componente!! DESPLAZAMIENTO ABAJO: ${scrollOffset} pixels`);
  }

}
