import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todoModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
     private data: Todo[] = [
    { name: 'Shopping' },
    { name: 'Rent Pay' },
    { name: 'Cleaning' }
  ]
  
 getData(): Todo[] {
  //console.log(this.data)
  return this.data;
}

  editTodo(oldValue: {name: string} | null, newValue: {name: string}): void {
    console.log(this.data);
    const index = this.data.findIndex(x => x == oldValue);
    //проверака за индекса?!?
    this.data[index].name = newValue.name;
  }

  deleteEdit(todoToDelete: {name: string}): void {
    //console.log(this.data);
    const index = this.data.findIndex(x => x == todoToDelete);
    //проверака за индекса?!?
    this.data.splice(index,1);
  }
  

 
}