import { Component, OnInit } from '@angular/core';
import { DependencyInjectionService } from '../../services/service.index';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styles: []
})
export class Padre2Component implements OnInit {

  constructor(private _dependencyInjectionService: DependencyInjectionService) { }

  ngOnInit() {
  }

}
