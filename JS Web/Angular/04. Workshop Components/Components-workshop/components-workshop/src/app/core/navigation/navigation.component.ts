import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private router: Router, private userService: UserService) {

  }
  get isLogged() {
    
    return this.userService.isLogged;
  }

  get user() {
    return this.userService.user;
  }
  

      
    }
