import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeliculashttpService {

  constructor(private httpClient: HttpClient) { }
  obtenerTodasLasPeliculas(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/plantillaSpringRest/api/peliculas');
  }
  eliminarPelicula(identificador): Observable<any>{
    return this.httpClient.delete('http://localhost:8080/plantillaSpringRest/api/peliculas/' + identificador);
  }
  agregarPelicula(pelicula: any){
    let json = JSON.stringify(pelicula);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post('http://localhost:8080/plantillaSpringRest/api/peliculas', json, {headers: header});
  }
}

