import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { AnimationModel } from '../animations.model';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { myAnimations } from '../animations';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-transition-animation',
  templateUrl: './transition-animation.component.html',
  styles: [],
  animations: [myAnimations]
})
export class TransitionAnimationComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  animation: AnimationModel;

  animations: any[] = [];

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

  ngOnInit(): void {
  }

  activatingAnimation() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
