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

  register(data: {email: string, username: string, password: string, tel: string}) {
    //console.log(data)
    //debugger
    this.user = {
      email: data.email,
      username: data.username,
      password: data.password,
      phone: data.tel
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

    login(): void {
      this.user = {
        email: 'mariya@gmai.com',
        username: 'mariya',
        password: '123456',
        phone: '656565'
      };
      
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

  }

  logout() {
    this.user = null;
    localStorage.removeItem('<USER>');
  }
}
