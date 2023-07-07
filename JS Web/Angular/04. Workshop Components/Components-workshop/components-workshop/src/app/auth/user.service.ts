import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | null = null;

  get isLogged() {
    return this.user != null;
  }
  constructor() { }

  // register() {

  // }

  // login() {

  // }

  // logout() {

  // }
}
