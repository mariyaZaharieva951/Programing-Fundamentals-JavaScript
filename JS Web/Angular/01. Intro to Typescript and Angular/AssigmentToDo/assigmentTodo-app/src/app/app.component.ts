import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assigmentTodo-app';
  todoToEdit: {name: string} | null = null;
  isTodoEdit: boolean = false;
  

  showEdit(todo: {name: string}): void {
    this.isTodoEdit = true;
    this.todoToEdit = todo;
  }

  hideEdit(): void {
    this.isTodoEdit = false;
    this.todoToEdit = null;
  }
}
