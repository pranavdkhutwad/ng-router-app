import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() highPriorities?: Task[];
  @Input() mediumPriorities?: Task[];
  @Input() lowPriorities?: Task[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateTaskEvent: EventEmitter<any> = new EventEmitter();

  deleteHandler(tasks: any) {
    this.deleteEvent.emit(tasks);
  }

  updateHandler(tasks: any) {
    this.updateTaskEvent.emit(tasks);
  }
}
