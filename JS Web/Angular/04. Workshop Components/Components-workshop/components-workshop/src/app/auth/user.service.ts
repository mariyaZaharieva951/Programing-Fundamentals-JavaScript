import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | null = null;
  USER_KEY = '[user]';


  get isLogged() {
    return this.user != null;
  }
  constructor() { }

  // register() {

  // }

    login(): void {
      this.user = {
        email: 'mariq@gmail.com',
        username: 'mariya',
        password: '123',
        phone: '5225'
      };

      localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

  }

  // logout() {

  // }
}
