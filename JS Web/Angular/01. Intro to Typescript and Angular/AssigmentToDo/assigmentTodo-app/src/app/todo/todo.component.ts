import { Component, Input } from '@angular/core';
import { Todo } from '../interfaces/todoModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo | undefined = undefined;
  
  constructor(private data: DataService) {
    
  }
}
