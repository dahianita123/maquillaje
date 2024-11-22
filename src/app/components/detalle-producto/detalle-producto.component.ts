import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-info-maquillaje',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class InfoMaquillajeComponent implements OnInit {
  productos = [
    {
      id: 1,
      nombre: "Rubor Blush",
      marca: "Trendy",
      precio: "$10.00",
      descripcion: "¡El rubor estampita que necesitabas en tus mejillas!.",
      imgUrl: "https://maquillajetrendyshop.com/wp-content/uploads/2023/06/RUBOR-EN-CREMA-BLUSH-STAMP-TRENDY-REF-RBS1312-2.jpg"
    },
    {
      id: 2,
      nombre: "Pestañina Boom",
      marca: "Trendy",
      precio: "$15.00",
      descripcion: "Todas nuestras referencias son lavables pero no se corren fácil durante el día.",
      imgUrl: "https://maquillajetrendyshop.com/wp-content/uploads/2021/09/ESTANDAR-PESTNA-BM071.jpg"
    },
    {
      id: 3,
      nombre: "Sombra en Trio",
      marca: "Trendy",
      precio: "$12.50",
      descripcion: "3 tonos de glitters prensados, ideales para quienes les gusta maquillarse fácil y rápido.",
      imgUrl: "https://maquillajetrendyshop.com/wp-content/uploads/2022/01/SOMBRA-EN-TRIO-SWEET-TRENDY-REF-SFP09-4-1-1.jpg"
    },
    {
      id: 4,
      nombre: "Brillo Fruticas",
      marca: "Trendy",
      precio: "$5.00",
      descripcion: "¡El olor y el empaque más cool para tus labios!",
      imgUrl: "https://maquillajetrendyshop.com/wp-content/uploads/2023/05/BRILLO-FRUTICAS-KAWAII-TRENDY-REF-FK16-8.jpg"
    },
    {
      id: 5,
      nombre: "Mantequilla Corporal",
      marca: "Trensy",
      precio: "$20.00",
      descripcion: "Aporta a la piel de tu cuerpo alta hidratación y nutrición.",
      imgUrl: "https://www.collarela.com/cdn/shop/products/MANTEQUILLACORPORALTRENDY200ML03_1200x1200.jpg?v=1666657208"
    }
  ];

  id: number | null = null;
  producto: any | null = null;
  mostrarDetalle = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productos.find(producto => producto.id === this.id);
    console.log("Id pasado producto", this.id, this.producto);
  }
}
