import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';

import { FormsModule } from '@angular/forms';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AppRoutingModule } from './app-routing.module'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoDetalleComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
