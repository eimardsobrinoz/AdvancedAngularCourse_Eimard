import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ResolverService } from './resolver.service';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class MyCustomResolver implements Resolve<any> {

    constructor(private _resolverService: ResolverService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // No funciona con la llamada al servicio que devuelve un observable. [Investigar]
        // return this._resolverService.getData(route.paramMap.get('country'));
        return this._resolverService.getData2(route.paramMap.get('country'));

    }

}