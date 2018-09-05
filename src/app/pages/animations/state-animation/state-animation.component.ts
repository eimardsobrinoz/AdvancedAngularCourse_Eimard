import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivationEnd } from '@angular/router';
import { AnimationModel } from '../animations.model';
import { myAnimations } from '../animations';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-state-animation',
  templateUrl: './state-animation.component.html',
  styles: [],
  animations: [myAnimations]
})
export class StateAnimationComponent implements OnDestroy {
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
      map( (data: ActivationEnd) => data.snapshot.data ),
    );
  }

  activatingAnimation() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
