import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AccessibilityService } from '../../../services/service.index';

@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styles: [`
      .modalContent {
        position: absolute;
        background: white;
        top: 50%;
        width: 60%;
        left: calc(50% - 378.5px);
        padding: 20px;
      }
  `]
})
export class DynamicModalComponent {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemoveModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() type: string = 'No Accesible';

  constructor(private _accessibility: AccessibilityService) { }

  removeModal() {
     console.log('Emitiendo el evento para eliminar este componente modal');
     this.onRemoveModal.emit();
  }


}
