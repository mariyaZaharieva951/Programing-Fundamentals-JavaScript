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

  register(data: {email: string, username: string, password: string, phone: string}) {
    //console.log(data)
    //debugger
    this.user = {
      email: data.email,
      username: data.username,
      password: data.password,
      phone: data.phone
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

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
