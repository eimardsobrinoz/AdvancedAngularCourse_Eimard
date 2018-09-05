import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
// import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// temporal
import { FormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { DynamicModalComponent } from './pages/dynamic-creation/dynamic-modal/dynamic-modal.component';
import { CommonModule } from '@angular/common';

// Parece ser que no es compatible el módulo BrowserModule con el BrowserAnimationModule. Por ello lo sustituí
// en los imports de este app.module.
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    DynamicModalComponent
  ],
  imports: [
    APP_ROUTES,
    FormsModule,
    ServiceModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ DynamicModalComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
