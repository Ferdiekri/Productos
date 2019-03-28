import { Producto } from './producto';

export const PRODUCTOS: Producto[] = [
  { id: 1, nombre: 'Leche', descripcion: 'Cosa blanca para beber.', precio:10 },
  { id: 2, nombre: 'Café', descripcion: 'Cosa negra para mezclar con la leche.', precio:20 },
  { id: 3, nombre: 'Tostada', descripcion: 'Rebanada de pan quemada.', precio:30 },
  { id: 4, nombre: 'Mermelada', descripcion: 'Cosa biscosa para untar.', precio:40 },
  { id: 5, nombre: 'Arroz', descripcion: 'Cereal blanco y alargado para hervir.', precio:50 },
  { id: 6, nombre: 'Pollo', descripcion: 'Animal de granja que se cocina.', precio:60 },
  { id: 7, nombre: 'Agua', descripcion: 'Líquido elemento elemental para vivir.', precio:70 },
  { id: 8, nombre: 'Refresco', descripcion: 'Líquido complementario que está muy rico.', precio:80 },
  { id: 9, nombre: 'Bizcocho', descripcion: 'Postre blandito para después de comer.', precio:90 }
];
console.log(PRODUCTOS);