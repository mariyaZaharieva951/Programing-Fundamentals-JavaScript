import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get isLogged() {
    return this.userService.isLogged
  }
  constructor(private userService: UserService, private router: Router) {

  }
}
