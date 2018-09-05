import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { ANIMATIONS_ROUTES } from './animations.route';
import { AnimationsService } from '../../services/animations/animations.service';
import { StateAnimationComponent } from './state-animation/state-animation.component';
import { TriggerAnimationComponent } from './trigger-animation/trigger-animation.component';
import { StyleAnimationComponent } from './style-animation/style-animation.component';
import { AnimateAnimationComponent } from './animate-animation/animate-animation.component';
import { TransitionAnimationComponent } from './transition-animation/transition-animation.component';
import { GenericAnimationComponent } from './generic-animation/generic-animation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ANIMATIONS_ROUTES,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AnimationsComponent,
    StateAnimationComponent,
    TriggerAnimationComponent,
    StyleAnimationComponent,
    AnimateAnimationComponent,
    TransitionAnimationComponent,
    GenericAnimationComponent
  ],
  providers: [AnimationsService]
})
export class AnimationsModule { }
