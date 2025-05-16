import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceData } from '../../../../services/serviceData/serviceData';

@Component({
  selector: 'app-active-user',
  imports: [],
  templateUrl: './active-user.component.html',
  styleUrl: './active-user.component.css'
})
export class ActiveUserComponent {
constructor(private route: ActivatedRoute, private service: ServiceData) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      debugger
      const token = params['token'];
      if (token) {
        this.fnActivarUsuario(token);
      }
    });
  }

  fnActivarUsuario(token:string) {

    const param = {
      token: token
    }
    this.service._API_POST_REQUEST_JSON('Usuario', 'finalizarActivacionUsuario', param)
      .subscribe({
        next: (response: any) => {
          debugger;
          console.log(response);
        },
        error(error) {
          console.log(error);
        },
      });
  }
}
