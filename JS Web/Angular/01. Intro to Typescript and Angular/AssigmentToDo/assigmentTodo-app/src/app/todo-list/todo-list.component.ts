import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../interfaces/todoModel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    @Input() data!: Todo[];
    //@Output() aditEvent = new EventEmitter<{name: string}>;


}
