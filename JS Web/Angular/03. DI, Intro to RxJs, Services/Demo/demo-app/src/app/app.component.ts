import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  appUsers: User[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users
  }

}

class Wallet {
  balance = 0;

  constructor(balance: number) {
    this.balance = balance
  }
}

class Car{
  model = '';
  constructor(model: string) {
    this.model = model;
  }
}


class PersonBetter {
  wallet: Wallet;
  car: Car;
  constructor(car: Car, wallet: Wallet) {
    this.wallet = wallet;
    this.car = car;
  }
}

const ivansCar = new Car('BMW');
const ivansWallet = new Wallet(1000);
const ivanPersonBetter = new PersonBetter(ivansCar,ivansWallet);