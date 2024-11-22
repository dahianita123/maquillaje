import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productosMaquillaje = [
    {id: 1, nombre: "Rubor Blush", marca: "Trendy", precio: 10.00, calificacion: 4.8, urlImg: "https://maquillajetrendyshop.com/wp-content/uploads/2023/06/RUBOR-EN-CREMA-BLUSH-STAMP-TRENDY-REF-RBS1312-2.jpg"},
    {id: 2, nombre: "Pestañina Boom", marca: "Trendy", precio: 15.00, calificacion: 4.9, urlImg: "https://maquillajetrendyshop.com/wp-content/uploads/2021/09/ESTANDAR-PESTNA-BM071.jpg"},
    {id: 3, nombre: "Sombra en Trio", marca: "Trendy", precio: 12.50, calificacion: 4.7, urlImg: "https://maquillajetrendyshop.com/wp-content/uploads/2022/01/SOMBRA-EN-TRIO-SWEET-TRENDY-REF-SFP09-4-1-1.jpg"},
    {id: 4, nombre: "Brillo Fruticas", marca: "Trendy", precio: 5.00, calificacion: 4.9, urlImg: "https://maquillajetrendyshop.com/wp-content/uploads/2023/05/BRILLO-FRUTICAS-KAWAII-TRENDY-REF-FK16-8.jpg"},
    {id: 5, nombre: "Mantequilla Corporal", marca: "Trendy", precio: 20.00, calificacion: 4.8, urlImg: "https://www.collarela.com/cdn/shop/products/MANTEQUILLACORPORALTRENDY200ML03_1200x1200.jpg?v=1666657208"}
];
}
