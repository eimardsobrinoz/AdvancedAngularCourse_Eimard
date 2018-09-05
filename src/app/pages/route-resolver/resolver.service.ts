import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {
  spainData: Object = {
    country: 'España',
    title : 'Ciudades',
    cities: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia', 'Jaén'],
    error: false
  };

  germanyData: Object = {
    country: 'Alemania',
    title : 'Ciudades',
    cities: ['Munich', 'Colonia', 'Stuttgart', 'Hambuirgo', 'Berlin'],
    error: false
  };

  constructor() { }

  getData(country: string): Observable<any> {
    return new Observable( observer => {
      switch (country) {
        case 'spain':
          observer.next(this.spainData);
          break;

        case 'germany':
          observer.next(this.germanyData);
          break;

        default:
          observer.next( { error: 'No hay resultados para ese país'} );
          break;
      }
    });
  }
  getData2(country: string): any {
    let data: any;
    switch (country) {
      case 'spain':
        data = this.spainData;
        break;

      case 'germany':
        data = this.germanyData;
        break;

      default:
        data =  { error: 'No hay resultados para ese país'};
        break;
    }
    return data;
  }

}
