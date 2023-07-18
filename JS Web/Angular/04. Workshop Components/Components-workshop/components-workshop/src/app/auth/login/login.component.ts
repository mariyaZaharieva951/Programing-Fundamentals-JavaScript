import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private userService: UserService) {}
    
    // this.userService.user = {
    //   username: 'mariya'
    // }
    //this.router.navigate(['/']);

    login(form: NgForm): void {
      if(form.invalid) {
        return;
      }

      this.userService.login();
      this.router.navigate(['/']);
      
    }

    
  
ngOnInit() {

}
}
