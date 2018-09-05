import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log(' ----- Route de guard: ', route);
    // console.log(' ----- StateRoute de guard: ', state);

    if ( this._usuarioService.estaLogueado() ) {
      return true;
    } else {
      console.log( 'Bloqueado por guard' );
      this.router.navigate(['/login']);
      return false;
    }
  }

}
