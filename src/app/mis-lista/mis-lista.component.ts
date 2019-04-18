import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';
@Component({
  selector: 'app-mis-lista',
  templateUrl: './mis-lista.component.html',
  styleUrls: ['./mis-lista.component.css']
})
export class MisListaComponent implements OnInit {

  peliculas: any;
  constructor(peliculaServicio: PeliculasService) {
    this.peliculas = peliculaServicio.peliculas;
  }

  ngOnInit() {
  }

}
