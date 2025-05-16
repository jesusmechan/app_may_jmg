import { Injectable } from "@angular/core";

@Injectable()
export class datosUsuario{
    idUsuarioActual: number = 0;
    idRolActual: number = 0;

    getIdUsuario(){
        return this.idUsuarioActual;
    }

    setIdUsuario(idUsuario:any){
        this.idUsuarioActual = idUsuario;
    }
}


