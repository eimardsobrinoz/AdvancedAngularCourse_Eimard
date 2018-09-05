// tslint:disable-next-line:max-line-length
import { Component, OnInit, TemplateRef, ElementRef, Renderer2, ViewRef, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AnimationsService } from '../../services/animations/animations.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AnimationModel } from './animations.model';
import { Subscription } from 'rxjs';
import { Router, ActivationEnd, OutletContext,  } from '@angular/router';
import { myAnimations } from './animations';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styles: [],
  animations: [myAnimations]
})
export class AnimationsComponent implements OnInit {
  animations: AnimationModel[] = [];
  animationColour: string = 'red';
  triggerValue: string = 'inactive';
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.animations = AnimationsService.animations;
  }



  addTemplateToOutlet(outlet: OutletContext, myH1: TemplateRef<ElementRef>) {
    console.log('Información del Outlet: ,', outlet);
    let template: TemplateRef<ElementRef>, h2: ElementRef;
    h2 = this.renderer.createElement('h2');
    let txt = this.renderer.createText('Hola soy el h2 proyectado en el routet outlet');
    this.renderer.appendChild(h2, txt);

    let viewContainerRef: ViewContainerRef = outlet['location'];
    viewContainerRef.insert(myH1.createEmbeddedView(null));
  }

  triggerAnimation() {
    // tslint:disable-next-line:curly
    (this.triggerValue === 'inactive') ? this.triggerValue = 'active' : this.triggerValue = 'inactive';
  }

}
