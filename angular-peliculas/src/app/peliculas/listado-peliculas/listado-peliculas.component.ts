import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  imports: [],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  @Input({required: true})
  peliculas!: any[];

  agregarPelicula() {
    this.peliculas.push({
      titulo: 'Nueva Película',
      fechaLanzamiento: new Date(),
      precio: 1000,
      poster: 'https://jkfenner.com/wp-content/uploads/2019/11/default.jpg'
    });
  }
  remover(pelicula: any) {
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
    this.peliculas.splice(indice,1);
  }
}
