import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from '../../../../services/authService.service';
import { ServiceData } from '../../../../services/serviceData/serviceData';
import { Router } from '@angular/router';
import { Usuario } from '../../../../interfaces/usuario';
import { datosUsuario } from '../../../../services/serviceData/datosUsuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})

export class RegistroComponent {
  formUsuario: FormGroup;
  verForm = true;
  verAlerta = false;
  mostrarMensaje = false;
  mensajeAlerta: string = '';
  constructor(
    private service: ServiceData,
    private authService: AuthServiceService,
    private router: Router,
    private fb: FormBuilder,
    private datosUsuario: datosUsuario
  ) {
    this.formUsuario = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required],
      confirmar_contrasenia: ['', Validators.required],
      accion: 'I',
    });
  }

  registrar() {
    debugger;
    const obj = { ...this.formUsuario.value };
    if (!this.fnComparaPass(obj.contrasenia, obj.confirmar_contrasenia)) {
      this.mostrarMensaje = true;
      this.mensajeAlerta = 'La contraseñas deben coincidir';
      return;
    }

    this.service
      ._API_POST_REQUEST_JSON('Usuario', 'Insertar_Actualizar_Usuario', obj)
      .subscribe({
        next: (response: any) => {
          debugger;
          const respuesta: any = response;
          const mensaje = response.mensaje;
          if (!respuesta.huboError) {
            this.verForm = false;
            this.mostrarMensaje = false;
          } else {
            this.mostrarMensaje = true;
            this.mensajeAlerta = mensaje;
          }
        },
      });
  }

  fnComparaPass(password: string, confirm_password: string): boolean {
    return password === confirm_password;
  }

  fnEnviarCorreo() {}
}
