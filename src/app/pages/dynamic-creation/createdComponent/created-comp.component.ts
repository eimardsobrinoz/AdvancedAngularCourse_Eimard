import { Component, OnInit, Input, Output, EventEmitter, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-created-comp',
  templateUrl: './created-comp.component.html',
  styles: []
})
export class CreatedCompComponent implements OnInit {
  @Input() title: string= '';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemoveComponent: EventEmitter<void> = new EventEmitter<void>();
  _ref: ComponentRef<CreatedCompComponent>;

  constructor() { }

  ngOnInit() {
  }

  removeComponent(event) {
    this.onRemoveComponent.emit();
    this._ref.destroy();
  }

}
