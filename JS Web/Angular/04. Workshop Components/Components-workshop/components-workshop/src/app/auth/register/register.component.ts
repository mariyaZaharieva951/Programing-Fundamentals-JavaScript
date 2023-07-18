import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private userService: UserService, private router: Router) {

  }

  register(form: NgForm): void {
    if(form.invalid) {
      return;
    }
   // console.log(form.value)
    this.userService.register(form.value);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    
  }
}
