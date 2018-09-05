import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Observable, fromEvent, empty } from 'rxjs';
import { map, share, auditTime, throttleTime, pairwise, distinctUntilChanged, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  scroll$: Observable<number>;
  scrollDirection$: Observable<any>;
  scrollUp$: Observable<any>;
  scrollDown$: Observable<any>;

  constructor(@Inject(DOCUMENT) private doc: any, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.scroll$ = fromEvent(doc, 'scroll').pipe(
        auditTime(200),
        map( (scrollEvent: Event) => window.scrollY || this.doc.documentElement.scrollTop),
        share()
      );
    } else {
      this.scroll$ = empty();
    }

    this.scrollDirection$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map( () => window.pageYOffset ),
      pairwise(),
      map( ([x, y]): Direction => (y < x ? Direction.Up : Direction.Down) ),
      distinctUntilChanged(),
      share()
    );

    this.scrollUp$ = this.scrollDirection$.pipe(
      filter( (dir: Direction) => dir === Direction.Up )
    );
    this.scrollDown$ = this.scrollDirection$.pipe(
      filter( (dir: Direction) => dir === Direction.Down )
    );

  }

}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}
