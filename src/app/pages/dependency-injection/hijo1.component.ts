import { Component, OnInit } from '@angular/core';
import { DependencyInjectionService } from '../../services/service.index';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styles: [],
  providers: [DependencyInjectionService]
})
export class Hijo1Component implements OnInit {

  constructor(private _dependencyInjectionService: DependencyInjectionService) { }

  ngOnInit() {
  }

}
