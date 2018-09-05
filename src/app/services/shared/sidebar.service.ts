import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class SidebarService {



  menu: any = [
// {
//     titulo: 'Principal',
//     icono: 'mdi mdi-gauge',
//     submenu: [
//         { titulo: 'Dashboard', url: '/dashboard' },
//         { titulo: 'ProgressBar', url: '/progress' },
//         { titulo: 'Gráficas', url: '/graficas1' },
//         { titulo: 'Promesas', url: '/promesas' },
//         { titulo: 'RxJs', url: '/rxjs' }
//     ]
// },
// {
//     titulo: 'Mantenimientos',
//     icono: 'mdi mdi-folder-lock-open',
//     submenu: [
//         { titulo: 'Hospitales', url: '/hospitales' },
//         { titulo: 'Médicos', url: '/medicos' }
//     ]
// },
{
    titulo: 'Angular Avanzado',
    icono: 'mdi mdi-folder-lock-open',
    submenu: [
        { titulo: 'Modularización', url: '/modularizacion', params: '' },
        { titulo: 'Enrutamiento', url: '/enrutado', params: '' },
        { titulo: 'Encapsulación', url: '/encapsulacion', params: '' },
        { titulo: 'Promesas y observables', url: '/promisesObs', params: '' },
        { titulo: 'Operadores', url: '/operatorsRxJs', params: '' },
        { titulo: 'Forms', url: '/forms', params: '' },
        { titulo: 'Directivas', url: '/directives', params: '' },
        { titulo: 'Manipulación DOM', url: '/dom', params: '' },
        { titulo: 'Proyección de contenido', url: '/ngcontent', params: '' },
        { titulo: 'Componentes Dinámicos', url: '/dynamicComponent', params: '' },
        { titulo: 'Detección de cambios', url: '/changeDetection', params: '' },
        { titulo: 'Inyección de dependencias', url: '/dependencyInjection', params: '' },
        { titulo: 'Optimización', url: '/optimization', params: '' },
        { titulo: 'Animaciones', url: '/animations', params: '' },
        { titulo: 'HttpClient', url: '/httpClient', params: '' },
        { titulo: 'Option outlet - Router', url: '/outletOption', params: '' },
        { titulo: 'Detecting Breakpoints ', url: '/breakPoints', params: '' },
        { titulo: 'Buscador Algolia', url: '/buscadorAlgolia', params: '' },
        { titulo: 'Route Resolver', url: '/routeResolver', params: 'spain' },
        { titulo: 'Lectura de ficheros', url: '/readFiles', params: ''},
        { titulo: 'Scroll in Angular 6', url: '/scroll', params: ''},
        { titulo: 'Generate PDF', url: '/pdf', params: ''},
        { titulo: '@Effect', url: '/effect', params: ''},
        { titulo: 'Curiosidades', url: '/curiosities', params: ''}
    ]
}
];

  constructor(
    public _usuarioService: UsuarioService
  ) { }

  cargarMenu() {
    // this.menu = this._usuarioService.menu;
  }

}
