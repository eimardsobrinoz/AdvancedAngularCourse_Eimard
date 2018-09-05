import { Component, OnInit, Input } from '@angular/core';
import { AnimationModel } from '../animations.model';

@Component({
  selector: 'app-generic-animation',
  templateUrl: './generic-animation.component.html',
  styleUrls: ['./generic-animation.component.css']
})
export class GenericAnimationComponent implements OnInit {
  @Input() animation: AnimationModel;
  constructor() { }

  ngOnInit() {
  }

}
