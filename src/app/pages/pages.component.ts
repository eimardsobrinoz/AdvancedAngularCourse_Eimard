// tslint:disable-next-line:max-line-length
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, Renderer2 } from '@angular/core';
import { AccessibilityService } from '../services/service.index';
import { DynamicModalComponent } from './dynamic-creation/dynamic-modal/dynamic-modal.component';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  @ViewChild('accesibleModal', { read: ViewContainerRef }) accesibleModal_vcr: ViewContainerRef;

  private modalFactory: ComponentFactory<DynamicModalComponent>;
  private modalRef: ComponentRef<DynamicModalComponent>;
  private modal: DynamicModalComponent;

  constructor(private _accessibilityService: AccessibilityService,
              private resolver: ComponentFactoryResolver,
              private renderer2: Renderer2,
              private vcr: ViewContainerRef) {

    this._accessibilityService.accesibleModal.subscribe( action => {
      switch (action) {
        case 'open' : {
          this.createModal();
          break;
        }
        case 'close' : {
          this.removeModal();
          break;
        }
        default: {
          break;
        }
      }
    });

  }

  ngOnInit() {
    init_plugins();
  }

  createModal() {
    // CREANDO NODO BOTÓN PARA LA MODAL
    let button = this.renderer2.createElement('button'),
        txtButton = this.renderer2.createText('Cerrar Modal Acessible');
    this.renderer2.appendChild(button, txtButton);

    this.renderer2.listen(button, 'click', () => this._accessibilityService.destroyModal());

    let index = 0,
        injector = this.vcr.parentInjector,
        projectNodes = [ [ button ] ];

    // CREACIÓN DEL COMPONENTE
    this.modalFactory = this.resolver.resolveComponentFactory(DynamicModalComponent);
    this.modalRef = this.accesibleModal_vcr.createComponent(this.modalFactory, index, injector, projectNodes);
    this.modal = this.modalRef.instance;
    this.modal.type = 'ACCESIBLE';
  }
  removeModal() {
    this.modalRef.destroy();
  }

  deactivateFunction($event) {
    console.log('Evento de deactivate: ', $event);
  }
  activateFunction($event) {
    console.log('Evento de activate: ', $event);
  }

}
