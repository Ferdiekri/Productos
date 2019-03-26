import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { PRODUCTOS } from '../mock-productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

    productos = PRODUCTOS;
  /*producto: Producto =  {
    id: 1,
    nombre: 'Leche',
    descripcion: 'Cosa blanca para beber.',
    precio: 1
  };*/

  productoSeleccionado: Producto;
  onSelect(producto: Producto): void {
    this.productoSeleccionado = producto;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
