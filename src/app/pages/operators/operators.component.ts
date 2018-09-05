
import {interval as observableInterval, of as observableOf,  Subscription ,  Subscriber ,  Observable } from 'rxjs';

import {retry, filter, map} from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';




@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styles: []
})
export class OperatorsComponent implements OnInit, OnDestroy {
  observableSubscriptions: Subscription[] = [];
  observableSubscription1: Subscription;
  observableSubscription2: Subscription;
  observableSubscription3: Subscription;


  myObservable1: Observable<number>;
  myObservable2: Observable< { [value: string]: string } >;
  myObservable3: Observable<number>;

  constructor() {
    this.myObservable1 = observableOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    let salida = { value: 'Valor Final' };
    this.myObservable2 = observableOf(salida);

    this.myObservable3 = observableInterval(1000);
  }

  ngOnInit() {
    this.observableSubscription1 = this.myObservable1.pipe(
      retry(2)).pipe(
        filter( number => number < 5)
      )
      // Números menores que 10 ==> 1, 2, 3, 4, 5, 6, 7, 8
      .subscribe( result => console.log('-- Subscripción 1: ', result));
    // tslint:disable-next-line:curly
    this.observableSubscriptions.push(this.observableSubscription1);


     this.observableSubscription2 = this.myObservable2
       .pipe( map( resp => resp.value) )
       .subscribe( mensaje => console.log('-- Subscripción 2: ', mensaje) );
     this.observableSubscriptions.push(this.observableSubscription2);


     this.observableSubscription3 = this.myObservable3
                                        .subscribe( value => console.log(' --Subscripción 3: ', value));
      this.observableSubscriptions.push(this.observableSubscription3);
  }

    ngOnDestroy(): void {
      this.observableSubscriptions.forEach(subscription => subscription.unsubscribe() );
    }
}
