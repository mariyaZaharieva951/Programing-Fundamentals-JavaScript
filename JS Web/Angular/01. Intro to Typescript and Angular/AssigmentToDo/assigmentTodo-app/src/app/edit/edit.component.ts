import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() todo!: {name: string} | null
  @Output() deleteEdit = new EventEmitter;
  constructor(private data: DataService) {

  }

  edit(name: string):void {
    this.data.editTodo(this.todo, {name});
    this.deleteEdit.emit()
  }

  cancel() {
    this.deleteEdit.emit()
  }
}
