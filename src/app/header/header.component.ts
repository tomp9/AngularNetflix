import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subCategorias: any = ['Disponibles para descargar', 'Originales de Netflix', 'Series'] ;
  constructor() { }

  ngOnInit() {
  }

}
