import { Component, OnInit, Self, SkipSelf, Optional } from '@angular/core';
import { DependencyInjectionService } from '../../services/service.index';

@Component({
  selector: 'app-nieto1',
  templateUrl: './nieto1.component.html',
  styles: [],
  providers: [DependencyInjectionService]
})
export class Nieto1Component implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(@Self() public _dependencyInjectionService1: DependencyInjectionService, @SkipSelf() public _dependencyInjectionService2: DependencyInjectionService) { }

  ngOnInit() {
  }

}
