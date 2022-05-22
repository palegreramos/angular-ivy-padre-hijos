import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PrincipalComponent } from './principal/principal.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { PortadaComponent } from './portada/portada.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CabeceraComponent, PrincipalComponent, PieComponent, MenuComponent, PortadaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
