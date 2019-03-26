import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';

import { FormsModule } from '@angular/forms';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
