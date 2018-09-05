import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-padre-native',
  templateUrl: './padre-native.component.html',
  styles: [
    `
      .greenParentClass{
        background: #0080003d;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class PadreNativeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
