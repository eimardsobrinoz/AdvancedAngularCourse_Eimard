import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddParamGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let access = false;
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:curly
    if ( (next.params['country'] === 'spain') || (next.params['country'] === 'germany') || (next.params['country'] === 'france') ) access = true;
    // tslint:disable-next-line:curly
    else alert('Debe de pasar como parámetro en la ruta \'spain\' o \'germany\' o \'france\'');

    return access;
  }
}
