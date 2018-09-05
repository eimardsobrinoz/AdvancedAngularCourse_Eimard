import { Component, OnInit, Self } from '@angular/core';
import { DependencyInjectionService } from '../../services/service.index';

@Component({
  selector: 'app-nieto2',
  templateUrl: './nieto2.component.html',
  styles: []
})
export class Nieto2Component implements OnInit {

  constructor(private _dependencyInjectionService: DependencyInjectionService) { }

  ngOnInit() {
  }

}
