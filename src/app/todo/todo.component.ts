import { Component, OnInit } from '@angular/core';
import { Task } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  highPriorityList: Task[] = [];
  mediumPriorityList: Task[] = [];
  lowPriorityList: Task[] = [];

  constructor(private todoService: TodoService) {}

  updateTasks(list: any) {
    const { highPriorities, mediumPriorities, lowPriorities } =
      this.todoService.filterByPriority(list);

    this.highPriorityList = highPriorities;
    this.mediumPriorityList = mediumPriorities;
    this.lowPriorityList = lowPriorities;
  }
  ngOnInit(): void {
    this.todoService.getTask().subscribe((data) => {
      const list = this.todoService.convertObjToArray(data);
      this.updateTasks(list);
    });
  }
  receiveTask(tasks: any) {
    this.updateTasks(tasks);
  }
}
