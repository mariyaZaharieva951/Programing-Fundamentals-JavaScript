import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../app/type/JsonPlaceholderUser';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  appUsers: User[] = [];
  isLoading = true;

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users
    
  }

  ngOnInit() {
    // this.userService.getUsers().then((users) => {
    //   this.appUsers = users;
    //   this.isLoading = false;})
    this.userService.getUsers().subscribe((users) => {
      this.appUsers = users;
      this.isLoading = false;})
  }

}
//DI
// class Wallet {
//   balance = 0;

//   constructor(balance: number) {
//     this.balance = balance;
//   }
// }

// class Car{
//   model = '';
//   constructor(model: string) {
//     this.model = model;
//   }
// }


// class PersonBetter {
//   wallet: Wallet;
//   car: Car;
//   constructor(car: Car, wallet: Wallet) {
//     this.wallet = wallet;
//     this.car = car;
//   }
// }

// const ivansCar = new Car('BMW');
// const ivansWallet = new Wallet(1000);
// const ivanPersonBetter = new PersonBetter(ivansCar,ivansWallet);

//Observable


function interval(intervalValue: number) {
  return new Observable<number>(observer => {
    // observer.next(1000); //резолваме стойности
    // observer.next(2000);
    // observer.next(3000);
    // observer.next(4000);
    let counter = 0;
  
    const interval = setInterval(() => {
      observer.next(counter++);
    }, 2000);
  
    return () => {
      clearInterval(interval) //ще спре да се изпълнява
    }
  });
}


// const stream$ = interval(1000).subscribe((data) => {
//   console.log(data)
// })
// const stream$ = interval(1000).pipe(map((x) => x + 2));
// stream$.subscribe({
//   next: (x) => console.log('data', x),
//   error: (err) => console.error(err),
//   complete: () => console.log('Stream has been completed')
// })
