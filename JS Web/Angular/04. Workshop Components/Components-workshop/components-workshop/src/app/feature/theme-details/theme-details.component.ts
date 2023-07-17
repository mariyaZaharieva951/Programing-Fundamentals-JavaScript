import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/auth/user.service';
import { Theme } from 'src/app/interfaces/themes';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent implements OnInit{
  theme: Theme | undefined;
  

  constructor(private apiService: ApiService, private activateRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    //debugger;
    this.fetchTheme();
    
  }
    fetchTheme(): void {
      console.log('start')
      const id = this.activateRoute.snapshot.params['themeId'];
      this.apiService.getTheme(id).subscribe((theme) => {
        this.theme = theme;
        console.log({theme})
      })
    }

    get isLogged(): boolean {
      return this.userService.isLogged;
    }
  


}
