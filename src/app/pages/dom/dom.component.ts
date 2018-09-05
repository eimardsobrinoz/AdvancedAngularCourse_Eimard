import { Component, OnInit, ElementRef, ViewChild, TemplateRef, ViewContainerRef, ViewRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styles: []
})
export class DomComponent implements AfterViewInit {
  @ViewChild('elementoP') elementoP: ElementRef;
  @ViewChild('colourList', {read: TemplateRef}) colourList: TemplateRef<any>;
  colourListView: ViewRef;
  @ViewChild('ngContainer', {read: ViewContainerRef}) ngContainer: ViewContainerRef;

  constructor() {

  }



  ngAfterViewInit() {
    this.colourListView = this.colourList.createEmbeddedView(null);
    console.log('%c ----- ELEMENTOS DEL DOM -----', 'font-size:20px; font-weight:bold');
    console.log('-- ElementRef: ', this.elementoP);
    console.log('-- TemplateRef: ', this.colourList);
    console.log('-- ViewRef: ', this.colourListView);
    console.log('-- ViewContainerRef: ', this.ngContainer);

    this.ngContainer.insert(this.colourListView);
  }
}
