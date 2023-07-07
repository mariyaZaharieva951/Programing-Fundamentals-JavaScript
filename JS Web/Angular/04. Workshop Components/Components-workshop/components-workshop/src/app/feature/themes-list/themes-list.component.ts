import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../interfaces/themes';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themesList: Theme[] = [];

  get isLogged() {
    return this.userService.isLogged;
  }
  constructor(private apiService: ApiService, private userService: UserService) {
      
  }

  ngOnInit(): void {
   this.apiService.getThemes().subscribe({
    next: (themes) => {
      this.themesList = themes;
    }
    });

  }
}
