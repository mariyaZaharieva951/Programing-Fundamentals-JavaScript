import { Injectable } from '@angular/core';
import { User } from './type/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {name: "Ivan", age: 21},
    {name: "Misho", age: 20},
    {name: "Pesho", age: 22},
    {name: "Penka", age: 23}
  ];
  constructor() {
    
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    };
    this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = '';
  }
}
