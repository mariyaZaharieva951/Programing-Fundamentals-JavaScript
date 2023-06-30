import { Component, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/interfaces/todoModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   @Output() inputEvent = new EventEmitter<{name: string}>
  constructor() {

  }

  addTodo(inputElement: HTMLInputElement): void {
    if(inputElement.value != '') {
      this.inputEvent.emit({name: inputElement.value});
      console.log(this.inputEvent)
      inputElement.value = '';
    } else {
      console.log('The field is emty!')
    }
  }
}
