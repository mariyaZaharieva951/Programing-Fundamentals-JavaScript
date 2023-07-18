import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private userService: UserService) {
    
    this.userService.user = {
      username: 'mariya'
    }
    this.router.navigate(['/']);
  }
ngOnInit() {

}
}