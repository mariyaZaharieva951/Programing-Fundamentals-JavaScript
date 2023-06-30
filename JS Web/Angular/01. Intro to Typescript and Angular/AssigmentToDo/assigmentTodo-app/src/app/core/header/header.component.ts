import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todoModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   
  constructor() {

  }

  addTodo(inputElement: HTMLInputElement): void {
    if(inputElement.value != '') {
     
    } else {
      console.log('The field is emty!')
    }
  }
}
