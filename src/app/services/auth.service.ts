import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private authSecretKey ='Bearer Token';
  constructor() {
    this.isAuthenticated = !!localStorage.getItem('isAuthenticated');
  }
  login(username: string, password: string) {
    if (username ==='username' && password ==='password') {
      const authToken = 'logintoken';
      localStorage.setItem(this.authSecretKey, authToken);
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  isAutherticatedUser() {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}
