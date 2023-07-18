import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
 
  constructor(private apiService: ApiService, private router: Router) {}

  createTheme(form: NgForm): void {
    //console.log(form)
    if(form.invalid) {
      return;
    }
    this.apiService.saveTheme(form.value).subscribe({
      next: () => {
        this.router.navigate(['/themes/list'])
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}
