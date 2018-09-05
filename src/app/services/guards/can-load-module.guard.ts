import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class CanLoadModuleGuard implements CanLoad {
  canLoad ( route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Route en guard CanLoad: ', route);
    // tslint:disable-next-line:max-line-length
    return confirm('Soy un guard CanLoad y decido se se cargará el módulo con las rutas hijas mediante lazy load con loadchildren ¿Quieres cargar las rutas hijas?');
  }
}
