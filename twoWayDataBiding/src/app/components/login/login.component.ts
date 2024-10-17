import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  valoracion = 5;

  imgUrl= 'https://play-lh.googleusercontent.com/4Ed_2_d7BIxCDgc07fojY_MiXBTvKr1z_q0d6me9l390BciTfbvacXQOKaTI9QeiUyJW'

  showUserInfo(){
    alert('User:admin, Contraseña:1234');
  }

  nombre= 'Patty'

}
