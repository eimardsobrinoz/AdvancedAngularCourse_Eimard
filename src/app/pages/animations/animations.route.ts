import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateAnimationComponent } from './state-animation/state-animation.component';
import { StyleAnimationComponent } from './style-animation/style-animation.component';
import { AnimateAnimationComponent } from './animate-animation/animate-animation.component';
import { TransitionAnimationComponent } from './transition-animation/transition-animation.component';
import { TriggerAnimationComponent } from './trigger-animation/trigger-animation.component';
import { AnimationsService } from '../../services/animations/animations.service';


const animationRoutes: Routes = [
    {path: 'animationTrigger', component: TriggerAnimationComponent, data: AnimationsService.getData('trigger') },
    {path: 'animationState', component: StateAnimationComponent, data: AnimationsService.getData('state')},
    {path: 'animationStyle', component: StyleAnimationComponent, data: AnimationsService.getData('style')},
    {path: 'animationAnimate', component: AnimateAnimationComponent, data: AnimationsService.getData('animate')},
    {path: 'animationTransition', component: TransitionAnimationComponent, data: AnimationsService.getData('transition')},
    {path: 'animations/**', component: TriggerAnimationComponent, data: AnimationsService.getData('trigger') }
];

export const ANIMATIONS_ROUTES = RouterModule.forChild(animationRoutes);
