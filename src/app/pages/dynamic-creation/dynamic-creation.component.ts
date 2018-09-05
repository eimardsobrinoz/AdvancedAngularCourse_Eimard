// tslint:disable-next-line:max-line-length
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef, AfterContentInit, Renderer, Renderer2, ElementRef, EventEmitter } from '@angular/core';
import { CreatedCompComponent } from './createdComponent/created-comp.component';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';
import { AccessibilityService } from '../../services/accessibility.service';

@Component({
  selector: 'app-dynamic-creation',
  templateUrl: './dynamic-creation.component.html',
  styles: []
})
export class DynamicCreationComponent implements AfterContentInit {
  @ViewChild('modalContainer', {read: ViewContainerRef}) modalContainer: ViewContainerRef;
  @ViewChild('dynamicComponentContainer', {read: ViewContainerRef}) dynamicComponentContainer: ViewContainerRef;
  componentFactory: ComponentFactory<CreatedCompComponent>;
  componentRef: ComponentRef<CreatedCompComponent>;
  newComponent: CreatedCompComponent;

  modalFactory: ComponentFactory<DynamicModalComponent>;
  modalRef: ComponentRef<DynamicModalComponent>;
  modalComponent: DynamicModalComponent;

  // tslint:disable-next-line:max-line-length
  constructor(private resolver: ComponentFactoryResolver,
              private vcr: ViewContainerRef,
              private renderer1: Renderer,
              private renderer2: Renderer2,
              private _accessibility: AccessibilityService) { }

  addDynamicModal() {
    let link = this.renderer2.createElement('a'),
        txtLink = this.renderer2.createText('Cerrar Normal Modal');
    this.renderer2.appendChild(link, txtLink);
    this.renderer2.setAttribute(link, 'href', '#');
    this.renderer2.listen(link, 'click', event => {
        event.preventDefault();
        this.modalRef.destroy();
    });

    let index = 0,
        injector =  this.vcr.parentInjector,
        projectNodes = [ [ link ] ];

    this.modalFactory = this.resolver.resolveComponentFactory(DynamicModalComponent);
    this.modalRef = this.modalContainer.createComponent(this.modalFactory, index, injector, projectNodes);
    this.modalComponent = this.modalRef.instance;
 }

 addAccesibleDynamicModal() {
    this._accessibility.lauchModal();
  }

  addDynamicComponent(title: string) {
    let genericNativeElement = this.vcr.element.nativeElement;

    // Creando h4 con servicio Renderer2
    let myNodeH4 = this.renderer2.createElement('h4'),
        txtH4 = this.renderer2.createText('Soy un h4 proyectado dinámicamente en el primer ng-content');
    this.renderer2.appendChild(myNodeH4, txtH4);

    // *** Creando p con servicio Renderer2 ***
    let myNodeP = this.renderer2.createElement('p'),
        txtP = this.renderer2.createText('Soy un p proyectado dinámicamente en el segundo ng-content');
    this.renderer2.appendChild(myNodeP, txtP);

    // *** Creando span con Renderer ***
    // tslint:disable-next-line:max-line-length
    let myNodeSpan = this.renderer1.createElement(genericNativeElement, 'span'),
        txtSpan = this.renderer1.createText(myNodeSpan, 'Span proyectado junto con el h5 en el tercer ng-content');
        this.renderer1.detachView([myNodeSpan]);

    // *** Creando h5 con Javascript ***
    let myNodeH5 = document.createElement('h5'),
        txtH5 = document.createTextNode('H5 que será proyectado junto con el span en el último ng-content');
    myNodeH5.appendChild(txtH5);
    this.renderer1.detachView([myNodeH5]);

    let injector = this.vcr.parentInjector;
    this.componentFactory = this.resolver.resolveComponentFactory(CreatedCompComponent);

    // tslint:disable-next-line:max-line-length
    this.componentRef = this.dynamicComponentContainer.createComponent(this.componentFactory, 0, injector, [ [myNodeH4], [myNodeP],
                                                                                            [myNodeH5, myNodeSpan] ]);
    this.newComponent = this.componentRef.instance;
    this.newComponent._ref = this.componentRef;

    console.log('Instancia de componente: ', this.newComponent);
    this.newComponent.title = title;

    this.newComponent.onRemoveComponent.subscribe( () => {
      console.log('Eliminando elemento: ');
    } );

  }


  ngAfterContentInit() {
    console.log('En este ciclo de vida se debe realizar la creación y eliminación dinámica de componentes');
  }


}
