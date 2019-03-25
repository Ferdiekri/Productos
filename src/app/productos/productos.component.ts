import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto: Producto = {
    nombre: 'Leche',
    descripcion: 'Cosa blanca para beber.',
    precio: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
