import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { InicioComponent } from './inicio/inicio.component';
import { Route, RouterModule } from '@angular/router';

const APP_ROUTES: Route[] = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'listado-plantilla', component: JugadoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    InicioComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking', onSameUrlNavigation: 'reload' }),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
