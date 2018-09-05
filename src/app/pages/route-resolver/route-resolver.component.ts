import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-route-resolver',
  templateUrl: './route-resolver.component.html',
  styles: []
})
export class RouteResolverComponent implements OnInit {
  data;
  constructor(private __activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    alert('Puedes cambiar el parámetro en la ruta para mostrar otros países. Valores disponibles: \'spain\' o \'germany\' o \'france\'');
    console.log('RouteResolver --- ActivatedRoute: ', this.__activatedRoute);
    this.data = this.__activatedRoute.snapshot.data['resolvedData'];
  }

}
