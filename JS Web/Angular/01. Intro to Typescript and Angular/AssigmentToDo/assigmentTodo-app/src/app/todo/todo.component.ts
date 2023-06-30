import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todoModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo | undefined = undefined;
  @Output() editEvent = new EventEmitter<{name:string}>
  constructor(private data: DataService) {
    
  }

  editTodo(): void {
    this.editEvent.emit(this.todo)
  }
}
