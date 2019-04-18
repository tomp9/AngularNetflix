import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PeliculashttpService} from '../servicios/peliculashttp.service';

@Component({
  selector: 'app-mis-descargas',
  templateUrl: './mis-descargas.component.html',
  styleUrls: ['./mis-descargas.component.css']
})
export class MisDescargasComponent implements OnInit {
  agregarPeliculaRegistro: any = { title: '', genre: '', rating: '', year: '' };
  movies: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private peliculashttpService: PeliculashttpService) { 
                this.obtenerPersonas();
              }
  obtenerPersonas(){
    this.peliculashttpService.obtenerTodasLasPeliculas().subscribe( resultado => {
            this.movies = resultado;
    }, error =>{
      console.log(JSON.stringify(error));
    }
    );
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        console.log('llego con el parametro id : ' + params['id']);
      }
    });
  }

  eliminarPelicula(identificador){
    console.log("evento eliminar");
  }
  agregarPelicula(){
    console.log("evento agregar");
  }

}
