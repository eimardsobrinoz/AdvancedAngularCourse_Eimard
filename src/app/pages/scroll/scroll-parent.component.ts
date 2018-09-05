import { Component, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { ScrollService } from './scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scroll-parent',
  templateUrl: './scroll-parent.component.html',
  styles: [`
    header {
      height: 150px;
      position: fixed;
      top: 0;
      width: 100%;
      background: black;
      padding: 10px;
      color: red;
      padding: 10px;
    }
  `]
})
export class ScrollParentComponent implements AfterViewInit, OnDestroy {
  visible: boolean = true;
  scrollSubscription: Subscription;
  constructor(private _scroll: ScrollService) {
    this.scrollSubscription = this._scroll.scroll$.subscribe( scroll => console.log('Subscrito a servicio scroll de la ventana', scroll));
  }

  ngAfterViewInit() {
    this._scroll.scrollUp$.subscribe( () => this.visible = true);
    this._scroll.scrollDown$.subscribe( () => this.visible = false);
  }

  scroll(event) {
    console.log('Evento recogido lanzado al hacer scroll desde el padre: ', event);
    let scrollOffset = event.srcElement.scrollTop;
    // alert(`Scroll lanzado desde el padre!! DESPLAZAMIENTO ABAJO: ${scrollOffset} pixels`);
  }

  @HostListener('window:scroll', ['$event']) doSomethingOnWindowsScroll($event: Event) {
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    console.log('window scroll: ', scrollOffset);
    // alert(`Scrol de la ventana global recogido a través de @HostListener. DESPLAZAMIENTO ABAJO: ${scrollOffset} pixels`);
  }
  windowScroll(event) {
    let scrollOffset = event.srcElement.children[0].scrollTop;
    console.log('window scroll: ', scrollOffset);
    // alert(`Scrol de la ventana global ´subscribiendome desde template. DESPLAZAMIENTO ABAJO: ${scrollOffset} pixels`);
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }
}
