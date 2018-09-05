import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimationModel } from '../animations.model';
import { myAnimations } from '../animations';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-trigger-animation',
  templateUrl: './trigger-animation.component.html',
  styles: [],
  animations : [myAnimations]
})

export class TriggerAnimationComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  animation: AnimationModel;
  animations: any[]= [];
  state: string;
  constructor(private _router: Router) {
    this.dataSubscription = this.$loadAnimationModel().subscribe( (animation: AnimationModel) => this.animation = animation);
  }

  ngOnInit() {
    this.state = 'active';
  }

  $loadAnimationModel() {
    return this._router.events.pipe(
      filter( data => data instanceof ActivationEnd ),
      filter( (data: ActivationEnd) => data.snapshot.firstChild == null ),
      map( (data: ActivationEnd) => data.snapshot.data )
    );
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  activatingAnimation() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
