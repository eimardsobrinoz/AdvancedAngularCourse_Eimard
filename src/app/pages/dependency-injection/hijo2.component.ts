import { Component, OnInit } from '@angular/core';
import { DependencyInjectionService } from '../../services/service.index';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styles: [],
  viewProviders: [DependencyInjectionService]
})
export class Hijo2Component implements OnInit {

  constructor(private _dependencyInjectionService: DependencyInjectionService) { }

  ngOnInit() {
  }

}
