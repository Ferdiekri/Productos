import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  productoSeleccionado: Producto;
  productos: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }

  onSelect(producto: Producto): void {
    this.productoSeleccionado = producto;
  }  
  
  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => this.productos = productos);
  }
}
