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
}