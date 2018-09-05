import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsComponent } from '../../pages/forms/forms.component';

@Injectable()
export class FormValidGuard implements CanDeactivate<FormsComponent> {
  // tslint:disable-next-line:max-line-length
  canDeactivate(comp: FormsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('CanDeactivate FormValid');
    console.log('CanDeactivate FormValid -- comp: ', comp);
    console.log('CanDeactivate FormValid -- currentRoute: ', currentRoute);
    console.log('CanDeactivate FormValid -- currentState: ', currentState);
    console.log('CanDeactivate FormValid -- nextState: ', nextState);

    return comp.form2.valid || window.confirm('¡El Segundo formulario no es válido! ¿Estás seguro de cambiar de página?');
  }
}
