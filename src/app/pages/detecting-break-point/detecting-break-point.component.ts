import {Component, OnInit, OnDestroy} from '@angular/core';
import { BreakpointObserver, BreakpointState, MediaMatcher, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detecting-break-point',
  templateUrl: './detecting-break-point.component.html',
  styles: [
    `
    :host {
      background: red;
    }
    html {
      background: red;
    }
    `
  ]
})
export class DetectingBreakPointComponent implements OnInit, OnDestroy {
  viewPortHeight: string = '-';
  myMatcher: MediaQueryList;

  constructor( private _breakPointObserver: BreakpointObserver, private _mediaMatcher: MediaMatcher ) {
  }

  ngOnInit() {
    // *************************** BREAKPOINTOBSERVER SERVICE ***************************
        this.detectionSizeViewPortObserve().subscribe( (version: string ) => {
          switch (version) {
            case 'escritorio':
            console.log('Versión de Escritorio');
            break;

            case 'tablet':
            console.log('Versión de Tablet');
            break;
          }
        });
    // *************************** END BREAKPOINTOBSERVER SERVICE ***************************


    // *************************** MEDIAMATCHER SERVICE ***************************
        this.myMatcher = this._mediaMatcher.matchMedia('(min-width: 300px)');
        this.myMatcher.addListener(this.myCustomListener);
    // *************************** MEDIAMATCHER SERVICE ***************************

  }

  // *************************** BREAKPOINTOBSERVER SERVICE ***************************
        // Using Observe
        detectionSizeViewPortObserve(): Observable<string> {
          return this._breakPointObserver.observe('(min-width: 970px)').pipe(
            map( (data: BreakpointState) => {
              let version = '';
              // tslint:disable-next-line:curly
              if (data.matches) version = 'escritorio';
              // tslint:disable-next-line:curly
              else version = 'tablet';
              return version;
            })
          );
        }

        detectionSizeViewPortObserveHandly(): Observable<any> {
          return this._breakPointObserver.observe([Breakpoints.Small, Breakpoints.HandsetLandscape]);
        }

        // Using isMatched
        isDesktopVersionActivated() {
          // Devuelve un true si el tamaño de la vista tiene como mínimo 970px y false en caso de ser menor

          // tslint:disable-next-line:curly
          if ( this._breakPointObserver.isMatched('(min-height: 300px)') ) this.viewPortHeight = '300px o más de altura';
          // tslint:disable-next-line:curly
          else this.viewPortHeight = 'Menos de 300px de altura';
        }
   // *************************** END BREAKPOINTOBSERVER SERVICE ***************************



  // *************************** MEDIAMATCHER SERVICE ***************************
      myCustomListener(event) {
        console.log('MatcherService listener event: ', event);
      }

      ngOnDestroy(): void {
        this.myMatcher.removeListener(this.myCustomListener);
      }
  // *************************** MEDIAMATCHER SERVICE ***************************

}
