import { Component, OnInit } from '@angular/core';
import { DependencyInjectionService } from '../../services/service.index';

@Component({
  selector: 'app-nieto-proyectado',
  templateUrl: './nieto-proyectado.component.html',
  styles: []
})
export class NietoProyectadoComponent implements OnInit {

  constructor(private _dependencyInjectionService: DependencyInjectionService) { }

  ngOnInit() {
  }

}
