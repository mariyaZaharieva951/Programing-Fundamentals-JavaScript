import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../interfaces/todoModel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    @Input() data!: Todo[];
    @Output() editEvent = new EventEmitter<{name: string}>;

    editTodo(todo: {name:string}): void {
      this.editEvent.emit(todo)
    }

}
