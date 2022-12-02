import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BenvingudaComponent } from './benvinguda/benvinguda.component';

const APP_ROUTES: Route[] = [
  {path: '', component: BenvingudaComponent},
  {path: 'benvinguda', component: BenvingudaComponent},
  {path: 'plantilla', component: JugadoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
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
