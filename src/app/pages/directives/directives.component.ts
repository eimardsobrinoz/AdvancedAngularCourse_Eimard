import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [
    `
      .active{
        border: 2px solid green;
      }
      .active2{
        border: 5px solid green;
      }
      .redBorder {
        border: 2px solid red;
      }
    `
  ]
})
export class DirectivesComponent implements OnInit {
  skills: string[] = ['Html', 'Angular', 'CSS', 'Javascript', 'JQuery'];
  
  bindableVariable = 'Soy una variable que esta siendo bindeada en el template';

  constructor() { }

  ngOnInit() {
  }

}
