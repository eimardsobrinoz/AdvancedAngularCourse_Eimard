
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ModularizacionComponent } from './modularizacion/modularizacion.component';
import { EncapsulacionComponent } from './encapsulacion/encapsulacion.component';
import { EnrutamientoComponent } from './enrutamiento/enrutamiento.component';
import { PromisesComponent } from './promises/promises.component';
import { OperatorsComponent } from './operators/operators.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './forms/reactive-form.component';
import { DirectivesComponent } from './directives/directives.component';
import { DomComponent } from './dom/dom.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DynamicCreationComponent } from './dynamic-creation/dynamic-creation.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { OptimizationComponent } from './optimization/optimization.component';
import { CuriositiesComponent } from './curiosities/curiosities.component';
import { PadreNativeComponent } from './encapsulacion/padre-native/padre-native.component';
import { PadreEmuladoComponent } from './encapsulacion/padre-emulado/padre-emulado.component';
import { HijoNoneComponent } from './encapsulacion/hijo-none/hijo-none.component';
import { HijoEmuladoComponent } from './encapsulacion/hijo-emulado/hijo-emulado.component';
import { HijoNativoComponent } from './encapsulacion/hijo-nativo/hijo-nativo.component';
import { BorderBlueDirective } from './directives/border-blue.directive';
import { RemoveActivesDirective } from './directives/remove-actives.directive';
import { BkgToSpansDirective } from './directives/bkg-to-spans.directive';
import { RedBorderDirective } from './directives/red-border.directive';
import { ColorDirective } from './directives/color.directive';
import { HijoComponent } from './content-projection/hijo.component';
import { PadreComponent } from './content-projection/padre.component';
import { CreatedCompComponent } from './dynamic-creation/createdComponent/created-comp.component';
import { RemoveActive2Directive } from './directives/remove-active2.directive';
import { ChangeDetectionHijoComponent } from './change-detection/change-detection-hijo/change-detection-hijo.component';
import { ChangeDetectionOnPushComponent } from './change-detection/change-detection-on-push.component';
// tslint:disable-next-line:max-line-length
import { ChangeDetectionHijoOnPushComponent } from './change-detection/change-detection-hijo-on-push/change-detection-hijo-on-push.component';
import { ChangeDetectionDefaultComponent } from './change-detection/change-detection-default.component';
import { ChangeDetectionService } from './change-detection/change-detection.service';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { Padre1Component } from './dependency-injection/padre1.component';
import { Padre2Component } from './dependency-injection/padre2.component';
import { Hijo2Component } from './dependency-injection/hijo2.component';
import { Hijo1Component } from './dependency-injection/hijo1.component';
import { Nieto2Component } from './dependency-injection/nieto2.component';
import { Nieto1Component } from './dependency-injection/nieto1.component';
import { NietoProyectadoComponent } from './dependency-injection/nieto-proyectado.component';
import { AnimationsModule } from './animations/animations.module';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientServiceService } from './http-client/http-client-service.service';
import { DetectingBreakPointComponent } from './detecting-break-point/detecting-break-point.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BuscadorComponent } from './buscador/buscador.component';
import { RouteResolverComponent } from './route-resolver/route-resolver.component';
import { MyCustomResolver } from './route-resolver/myCustomResolver';
import { ReadFilesComponent } from './read-files/read-files.component';
import { ScrollComponent } from './scroll/scroll.component';
import { ScrollParentComponent } from './scroll/scroll-parent.component';
import { PdfComponent } from './pdf/pdf.component';
import { EffectComponent } from './effect/effect.component';
import { OutletOptionComponent } from './outlet-option/outlet-option.component';

@NgModule({
    declarations: [
        // PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        // ModalUploadComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        BusquedaComponent,
        // Curso Angular Avanzado
        ModularizacionComponent,
        EncapsulacionComponent,
        EnrutamientoComponent,
        PromisesComponent,
        OperatorsComponent,
        FormsComponent,
        DirectivesComponent,
        DomComponent,
        ContentProjectionComponent,
        DynamicCreationComponent,
        ChangeDetectionComponent,
        OptimizationComponent,
        CuriositiesComponent,
        PadreNativeComponent,
        PadreEmuladoComponent,
        HijoNoneComponent,
        HijoEmuladoComponent,
        HijoNativoComponent,
        BorderBlueDirective,
        RemoveActivesDirective,
        BkgToSpansDirective,
        RedBorderDirective,
        ColorDirective,
        HijoComponent,
        PadreComponent,
        CreatedCompComponent,
        RemoveActive2Directive,
        ChangeDetectionHijoComponent,
        ChangeDetectionOnPushComponent,
        ChangeDetectionHijoOnPushComponent,
        ChangeDetectionDefaultComponent,
        DependencyInjectionComponent,
        Padre1Component,
        Padre2Component,
        Hijo2Component,
        Hijo1Component,
        Nieto2Component,
        Nieto1Component,
        NietoProyectadoComponent,
        HttpClientComponent,
        DetectingBreakPointComponent,
        BuscadorComponent,
        RouteResolverComponent,
        ReadFilesComponent,
        ScrollParentComponent,
        ScrollComponent,
        PdfComponent,
        EffectComponent,
        ReactiveFormComponent,
        OutletOptionComponent
    ],
    entryComponents: [
        CreatedCompComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule,
        AnimationsModule,
        LayoutModule
    ],
    providers: [ChangeDetectionService, HttpClientServiceService, MyCustomResolver]
})
export class PagesModule { }
