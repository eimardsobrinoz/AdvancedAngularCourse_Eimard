import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hijo-none',
  templateUrl: './hijo-none.component.html',
  styles: [
    `
      .redChildClass {
        background: #ff000045;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class HijoNoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
