import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { InicioComponent } from './inicio/inicio.component';
import { Route, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BenvingudaComponent } from './benvinguda/benvinguda.component';

const APP_ROUTES: Route[] = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'benvinguda', component: BenvingudaComponent},
  {path: 'listado-plantilla', component: JugadoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    BenvingudaComponent
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
