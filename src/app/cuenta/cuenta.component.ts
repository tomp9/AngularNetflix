import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  formularioCuenta: FormGroup;
  title = 'app';
  constructor(private formBuilder: FormBuilder) {
    this.formularioCuenta = this. formBuilder.group({
      nombre: ['nombre por defecto ' , Validators.required],
      apellido: ['nombre por defecto', Validators.required],
      email: ['ruiz@gmail.com', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]]
    });
  }

  onSubmit(parametro: any) {
    console.log(parametro);
  }
  ngOnInit() {
  }
}
