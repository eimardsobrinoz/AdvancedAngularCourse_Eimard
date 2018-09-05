import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable ,  Subscription } from 'rxjs';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit, OnDestroy {
  cont: number = 0;
  observableSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.crhonometer();
    this.loadExample('observable');
  }

    loadExample(action: string) {
      switch (action) {
        case 'promesa': {
          console.log('---------  EJECUTANDO PROMESA  ---------');
          this.loadPromise(true)
            .then( mensaje => {
              console.log(`%c ${mensaje}`, 'background: green; color: white; font-size: 20px');
            })
            .catch( err => {
              console.log(`%c ${err} `, 'background: red; color: white;font-size: 20px');
          });
          break;
        }
        case 'observable': {
          console.log('---------  EJECUTANDO OBSERVABLE  ---------');
          this.observableSubscription = this.loadObservable('end').subscribe(
            mensaje => {
              console.log(`%c ${mensaje} `, 'background: red; color: white;font-size: 20px');
            },
            err => {
              console.log(`%c ${err} `, 'background: red; color: white;font-size: 20px');
            },
            () => {
              console.log(`%c Observable completado `, 'background: blue; color: white;font-size: 20px');
            }
          );
          break;
        }
        default: {
          console.log('---------  ELIGE PROMESA U OBSERVABLE  ---------');
          break;
        }
      }
    }

    loadPromise(valid: boolean): Promise<string> {

      return new Promise ( (resolve, reject) => {

        setTimeout( () => {
          // tslint:disable-next-line:curly
          if (valid) resolve('Promesa terminada con éxito !!!');
          // tslint:disable-next-line:curly
          else reject('ERROR AL CAPTURAR PROMESA');
        }, 5000);

      });

    }

    loadObservable(toDo: string): Observable<string> {

      return new Observable( observer => {
        setTimeout( () => {
          switch (toDo) {
            case 'ok': {
              observer.next('Observable: Información obtenida con éxito');
              break;
            }
            case 'error': {
              observer.error('Observable: Error al enviar información');
              break;
            }
            case 'end': {
              observer.complete();
              break;
            }
            default: {
              observer.next('Información obtenida con éxito');
              break;
            }
          }
        }, 5000);
      });

    }

    crhonometer() {
      setTimeout( () => {
        // tslint:disable-next-line:curly
        if (this.cont == 4) return;
        this.cont += 1;
        console.log(this.cont);
        this.crhonometer();
      }, 1000);
    }

    ngOnDestroy(): void {
      // tslint:disable-next-line:curly
      if(this.observableSubscription) this.observableSubscription.unsubscribe();
    }
}
