import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/interfaces/themes';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent {
  //theme: Theme | undefined;

  constructor(private apiService: ApiService) {

  }


}
