import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

private tokenKey: string = 'jwt-sistema-jmg';

constructor() { }


  // Verifica si el token está autenticado
  estaAutenticado(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiracion = payload.exp * 1000;
    return Date.now() < expiracion;
  }
  
  setToken(token: any): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.setItem(this.tokenKey, token);
  }
  
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Elimina el token (logout)
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }


}
