import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  // to create custom event
  @Output() taskEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('f') form?: any;

  constructor(private todoService: TodoService) {}

  addTask() {
    this.todoService.addTask(this.form.value).subscribe(() => {
      this.todoService.getTask().subscribe((data) => {
        const list = this.todoService.convertObjToArray(data);
        this.taskEvent.emit(list);
        this.form.resetForm();
      });
    });
  }
}
