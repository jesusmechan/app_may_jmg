import { Component } from '@angular/core';
import { ReactiveFormsModule , FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../../services/authService.service';
import { ServiceData } from '../../../../services/serviceData/serviceData';
import { Router } from '@angular/router';
import { Usuario } from '../../../../interfaces/usuario';
import { datosUsuario } from '../../../../services/serviceData/datosUsuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 usuario: Usuario | undefined;
  formularioLogin: FormGroup
  ocultarPassword:boolean = true;
  mostarLoading: boolean = false;
  mostrarMensaje: boolean = false;
  mensajeAlerta: string = "";
  private tokenKey: string = 'jwt-sistema-jmg'

    constructor(private service: ServiceData, private authService: AuthServiceService, private router: Router, private fb: FormBuilder, private datosUsuario: datosUsuario ) {
    this.formularioLogin = this.fb.group({
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

iniciarSesion(){
    debugger

    if(!this.fnValidarCampos())  return;
    this.mostarLoading = true;
    let _param ={
      correo: this.formularioLogin.value.correo,
      contrasenia: this.formularioLogin.value.contrasenia
    }
    this.service._API_POST_REQUEST_JSON('InicioSesion', 'VerificarAcceso', _param).subscribe({
      next: (response: any) => {
        debugger
        this.usuario = response;
        console.log(this.usuario);
        console.log(response.entidad);
        const valido = response.esValido;
        const datosUsuario = response.entidad;
        const mensaje = response.mensaje;
        if(valido){
          this.mostrarMensaje = true;
          this.mensajeAlerta = mensaje;
          this.generarToken(datosUsuario);
        }
        else{
          this.mostrarMensaje = true;
          this.mensajeAlerta = mensaje;
        }

        // }
      },
      error(error) {
        console.log(error);
        // this.mostarLoading = false;
      },
    })
  }

    fnValidarCampos () :boolean {
    let valido = true;
    const usuario = this.formularioLogin.value.LOGIN;
    const password = this.formularioLogin.value.PASSWORD;

    if(usuario == ''){
      this.mensajeAlerta = 'Debe ingresar un usuario';
      this.mostrarMensaje = true;
      return false;
    }
    if(usuario == ''){
      this.mensajeAlerta = 'Debe ingresar una contraseña';
      this.mostrarMensaje = true;
      return false;
    }
    return true;

  }

    generarToken(entidad :datosUsuario){
    this.service._API_POST_REQUEST_JSON('InicioSesion', 'GenerarTokenJWT', entidad).subscribe({
      next: (response: any) => {
        debugger
        console.log(response);
          this.mostarLoading = false;
          this.usuario = response;
       
          localStorage.removeItem('usuario');
          this.datosUsuario.setIdUsuario(this.usuario?.idusuario);
          localStorage.setItem('usuario', JSON.stringify(this.usuario));

          this.authService.setToken(this.usuario?.token);
          
          this.router.navigate(['layout']);
  
      },
      error(error) {
        console.log(error);
        // this.mostarLoading = false;
      },
    })
  }
}
