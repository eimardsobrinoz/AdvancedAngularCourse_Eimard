import { Component, OnDestroy, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimationModel } from '../animations.model';
import { Router, ActivationEnd } from '@angular/router';
import { myAnimations } from '../animations';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-animate-animation',
  templateUrl: './animate-animation.component.html',
  styles: [],
  animations: [myAnimations]
})
export class AnimateAnimationComponent implements OnDestroy {
  dataSubscription: Subscription;
  animation: AnimationModel;
  state: string;

  constructor(private _router: Router) {
    this.dataSubscription = this.$loadAnimationModel().subscribe( (animation: AnimationModel) => this.animation = animation);
  }

  $loadAnimationModel() {
    return this._router.events.pipe(
      filter( data => data instanceof ActivationEnd ),
      filter( (data: ActivationEnd) => data.snapshot.firstChild == null ),
      map( (data: ActivationEnd) => data.snapshot.data )
    );
  }

  activatingAnimation() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }


}
