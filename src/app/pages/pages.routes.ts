import { RouterModule, Routes, CanLoad } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { ProfileComponent } from './profile/profile.component';

// Guards
import { LoginGuardGuard, FormValidGuard } from '../services/service.index';
import { AdminGuard } from '../services/service.index';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';
import { ModularizacionComponent } from './modularizacion/modularizacion.component';
import { EncapsulacionComponent } from './encapsulacion/encapsulacion.component';
import { EnrutamientoComponent } from './enrutamiento/enrutamiento.component';
import { PromisesComponent } from './promises/promises.component';
import { DirectivesComponent } from './directives/directives.component';
import { OperatorsComponent } from './operators/operators.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './forms/reactive-form.component';
import { DomComponent } from './dom/dom.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DynamicCreationComponent } from './dynamic-creation/dynamic-creation.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { OptimizationComponent } from './optimization/optimization.component';
import { CuriositiesComponent } from './curiosities/curiosities.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { AnimationsComponent } from './animations/animations.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { DetectingBreakPointComponent } from './detecting-break-point/detecting-break-point.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CanLoadModuleGuard } from '../services/guards/can-load-module.guard';
import { RouteResolverComponent } from './route-resolver/route-resolver.component';
import { MyCustomResolver } from './route-resolver/myCustomResolver';
import { AddParamGuard } from '../services/guards/add-param.guard';
import { ReadFilesComponent } from './read-files/read-files.component';
import { ScrollParentComponent } from './scroll/scroll-parent.component';
import { PdfComponent } from './pdf/pdf.component';
import { EffectComponent } from './effect/effect.component';
import { OutletOptionComponent } from './outlet-option/outlet-option.component';


const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [ VerificaTokenGuard ],
        data: { titulo: 'Dashboard' }
    },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ AdminGuard ],
        data: { titulo: 'Mantenimiento de Usuarios' }
    },
    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // Curso
    { path: 'modularizacion', component: ModularizacionComponent, data: { titulo: 'Modularización del código' } },
    { path: 'enrutado', component: EnrutamientoComponent, data: { titulo: 'Enrutamiento en Angular' } },
    { path: 'encapsulacion', component: EncapsulacionComponent, data: { titulo: 'Encapsulación de estilos' } },
    { path: 'promisesObs', component: PromisesComponent, data: { titulo: 'Promesas y observables' } },
    { path: 'operatorsRxJs', component: OperatorsComponent, data: { titulo: 'Operadores map, filter, reply' } },
    // {
    //     path: 'forms',
    //     component: FormsComponent,
    //     data: { titulo: 'Formularios: Data y Template' },
    //     canDeactivate: [FormValidGuard]
    //  },
     {
        path: 'forms',
        component: ReactiveFormComponent,
        data: { titulo: 'Formulario Reactivo' }
     },
    { path: 'directives', component: DirectivesComponent, data: { titulo: 'Directivas en Angular' } },
    { path: 'dom', component: DomComponent, data: { titulo: 'Manipulación de elementos del DOM' } },
    { path: 'ngcontent', component: ContentProjectionComponent, data: { titulo: 'Proyección de contenido' } },
    { path: 'dynamicComponent', component: DynamicCreationComponent, data: { titulo: 'Creación dinámica de componentes y Manipulación' } },
    { path: 'changeDetection', component: ChangeDetectionComponent, data: { titulo: 'Detección de cambios' } },
    { path: 'dependencyInjection', component: DependencyInjectionComponent, data: { titulo: 'Injección de Dependencias' } },
    { path: 'optimization', component: OptimizationComponent, data: { titulo: 'Optimización en Angular' } },
    { path: 'curiosities', component: CuriositiesComponent, data: { titulo: 'Curiosidades' } },
    {
        path: 'animations',
        component: AnimationsComponent,
        data: { titulo: 'Animaciones en componentes' },
        loadChildren: './animations/animations.module#AnimationsModule',
        canLoad: [CanLoadModuleGuard]
    },
    { path: 'httpClient', component: HttpClientComponent, data: { titulo: 'HttpClient' } },
    { path: 'breakPoints', component: DetectingBreakPointComponent, data: { titulo: 'Detecting Breakpoint' } },
    { path: 'buscadorAlgolia', component: BuscadorComponent, data: { titulo: 'Buscador Algolia' } },
    { path: 'readFiles', component: ReadFilesComponent, data: { titulo: 'Lectura de ficheros' } },
    { path: 'scroll', component: ScrollParentComponent, data: { titulo: 'Scroll en Angular 6' } },
    { path: 'pdf', component: PdfComponent, data: { titulo: 'Generar PDF' } },
    { path: 'outletOption', component: OutletOptionComponent, data: { titulo: 'Option outlet - Angular Router' } },
    { path: 'effect', component: EffectComponent, data: { titulo: '@Effect' } },
    {
        path: 'routeResolver/:country',
        component: RouteResolverComponent,
        data: { titulo: 'Route Resolver' },
        canActivate: [AddParamGuard],
        resolve: {
            resolvedData: MyCustomResolver
        }
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
