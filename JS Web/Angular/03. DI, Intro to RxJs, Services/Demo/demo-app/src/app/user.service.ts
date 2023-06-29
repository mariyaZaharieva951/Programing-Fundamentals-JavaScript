import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './type/JsonPlaceholderUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  constructor(private http: HttpClient) {

  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // const user = {
    //   name: inputName.value,
    //   age: Number(inputAge.value)
    // };
    // this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = '';
  }

  getUsers() {
    //return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
