import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {Observable} from 'rxjs';
import {reject} from 'q';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  usuario:any = {

    nombrecompleto: {
      nombre: "Fran",
      apellido: "Aragon"
    },
    email: "hola@franaragon.net",
    pasatiempos: ["Correr", "Dormir", "Comer"]
  }

  constructor() {

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl( '',
          [
            Validators.required,
            Validators.minLength(3)
          ]),
        'apellido': new FormControl( '', [
          Validators.required,
          this.noAragon
        ] )
      }),
      'email': new FormControl( '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
        ]),
      'pasatiempos': new FormArray([
        new FormControl('')
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario ),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    })

    // this.forma.setValue( this.usuario );

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ])

    this.forma.controls['username'].valueChanges.subscribe( data => {
      console.log(data);
    })

    this.forma.controls['username'].statusChanges.subscribe( data => {
      console.log(data);
    })

  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  // validacion personalizada
  noAragon( control: FormControl ):{ [s:string]:boolean } {
    if (control.value === "aragon") {
      return{
        noaragon:true
      }
    }
    return null;
  }

  // validacion personalizada
  noIgual( control: FormControl ):{ [s:string]:boolean } {
    let forma:any = this;
    if (control.value !== forma.controls['password1'].value ) {
      return{
        noiguales:true
      }
    }
    return null;
  }

  existeUsuario( control: FormControl ): Promise<any>|Observable<any>{
    let promesa = new Promise(
      (resolve, reject) => {

        setTimeout( () =>{
          if (control.value === 'franaragm'){
            resolve({existe:true})
          }else{
            resolve(null)
          }
        }, 3000)

      }
    )
    return promesa;
  }

  guardarCambios() {
    console.log(this.forma.value);

    // reseteo de formulario a estado inicial
    // this.forma.reset(this.usuario);

    // reseteo de formulario a estado inicial
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   email: ""
    // });
  }

}
