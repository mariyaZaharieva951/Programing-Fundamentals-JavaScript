import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todoModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
    public todos!: Todo[];

  constructor(private data: DataService) {
    
  }

  ngOnInit(): void {
    this.todos = this.data.getData();
  }
}
