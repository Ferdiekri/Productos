import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { PRODUCTOS } from './mock-productos';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private mensajeService: MensajeService) { }

  getProductos(): Observable<Producto[]> {
    this.mensajeService.add('MensajeService: productos cargados.');
    return of(PRODUCTOS);
  }
}