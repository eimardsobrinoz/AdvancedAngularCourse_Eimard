import { Component, OnInit } from '@angular/core';
import { DependencyInjectionService } from '../../services/service.index';

@Component({
  selector: 'app-padre1',
  templateUrl: './padre1.component.html',
  styles: [],
  providers: [DependencyInjectionService]
})
export class Padre1Component implements OnInit {
  variable: string;
  constructor(private _dependencyInjectionService: DependencyInjectionService) { }

  ngOnInit() {
  }

}
