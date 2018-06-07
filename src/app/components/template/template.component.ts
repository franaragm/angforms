import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario:Object = {
    nombre: "Fran",
    apellido: "Aragon",
    email: "",
    pais: "CRI",
    sexo: "Hombre",
    acepta: true
  };

  paises = [
    {
      codigo:"CRI",
      nombre: "Costa Rica"
    },{
      codigo:"ESP",
      nombre: "España"
    },{
      codigo:"UK",
      nombre: "Reino Unido"
    }
  ];

  sexos: string[] = ["Hombre", "Mujer"];

  constructor() { }

  guardar( forma:NgForm ){
    console.log( "ngForm",forma );
    console.log( "Valor", forma.value );

    console.log( "Usuario", this.usuario );
  }

}
