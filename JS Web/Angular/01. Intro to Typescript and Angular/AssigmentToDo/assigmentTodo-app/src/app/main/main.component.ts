import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todoModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
    public todos!: Todo[];
    @Output() editEvent = new EventEmitter<{name: string}>;

  constructor(private data: DataService) {
    
  }

  ngOnInit(): void {
    this.todos = this.data.getData();
    
  }

  addTodo(newTodo: {name: string}): void {
    this.todos.push(newTodo);
    console.log(this.todos)
  }

  editTodo(todo: {name:string}): void {
    this.editEvent.emit(todo)
  }
}
