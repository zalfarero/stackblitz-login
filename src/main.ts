import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { LoginComponent} from "./app/login/login.component";
import { Router } from "@angular/router";
import { AuthService} from "./app/services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: `<app-login></app-login>`,
})
export class App {
  constructor(private authService: AuthService, private router: Router ) {}

  logout(){
      this.authService.logout();
      this.router.navigateByUrl('login');
  }
}

bootstrapApplication(App);
