import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-padre-emulado',
  templateUrl: './padre-emulado.component.html',
  styles: [
    `
      .greenParentClass{
        background: #0080003d;
      }
    `
  ],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
          'class' : 'redChildClass',
          'style' : '3px solid green',
          '[class.probando]' : 'variable',
          '[hidden]' : 'variable',
          '[attr.role]' : 'role',
  },
  encapsulation: ViewEncapsulation.Emulated
  })
export class PadreEmuladoComponent implements OnInit {
  variable: boolean= false;
  role: string= 'probando1';
  constructor() { }

  ngOnInit() {
    this.variable =  false;
    setTimeout( () => this.role = "probando2", 3000);
  }

}
