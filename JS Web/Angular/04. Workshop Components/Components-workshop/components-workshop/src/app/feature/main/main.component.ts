import { Component } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  get isLogged() {
    return this.UserService.isLogged;
  }

  constructor(private UserService: UserService) {

  }
}
