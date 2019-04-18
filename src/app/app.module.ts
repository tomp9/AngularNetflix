import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Form, ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { MisDescargasComponent } from './mis-descargas/mis-descargas.component';
import { MisListaComponent } from './mis-lista/mis-lista.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';

import {PeliculasService} from './servicios/peliculas.service';
import {PeliculashttpService} from './servicios/peliculashttp.service';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [
  {
    path: 'cuenta',
    component: CuentaComponent
  },
  {
    path: 'mis-descargas',
    component: MisDescargasComponent
  }, {
    path: 'mis-descargas/:id/:sesionId',
    component: MisDescargasComponent
  },
  {
    path: 'mis-lista',
    component: MisListaComponent
  }, {
    path: '**',
    component: CuentaComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CuentaComponent,
    MisDescargasComponent,
    MisListaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [PeliculasService,PeliculashttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
