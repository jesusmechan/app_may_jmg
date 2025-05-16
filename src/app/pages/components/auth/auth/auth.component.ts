import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login/login.component';
import { RegistroComponent } from '../../registro/registro/registro.component';

@Component({
  selector: 'app-auth',
  imports: [LoginComponent, RegistroComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
