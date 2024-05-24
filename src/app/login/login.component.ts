import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.username=="username"&&this.loginForm.value.password =='password'){
      sessionStorage.setItem('isloggedIn', 'true')
    } else {
      sessionStorage.setItem('isloggedIn', 'false');
    }
  }
}
