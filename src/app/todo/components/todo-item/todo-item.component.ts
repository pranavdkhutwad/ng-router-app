import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  // employees: any = [
  //   {
  //     name: 'Shraddha',
  //     skill: 'Angular',
  //   },
  //   {
  //     name: 'Shruti',
  //     skill: 'Angular',
  //   },
  //   {
  //     name: 'Aman',
  //     skill: 'React',
  //   },
  //   {
  //     name: 'Dhiraj',
  //     skill: 'HTML',
  //   },
  // ];

  @Input() item?: Task;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateTaskEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private todoService: TodoService,
    private modalService: NgbModal
  ) {}

  // addEmployee() {
  //   this.employees = [
  //     ...this.employees,
  //     {
  //       name: 'Rutuja',
  //       skill: 'Angular',
  //     },
  //   ];
  // }
  getClass(priority: number | null | undefined) {
    return this.todoService.getClassByPriority(priority);
  }

  editTask(task: Task | undefined) {
    if (task) {
      const modalRef = this.modalService.open(EditModalComponent);
      modalRef.componentInstance.task = task;
      modalRef.componentInstance.updateTaskEvent.subscribe((list: any) => {
        this.updateTaskEvent.emit(list);
      });
    }
  }

  deleteTask(id: string | undefined) {
    if (id) {
      this.todoService.deleteTask(id).subscribe(() => {
        this.todoService.getTask().subscribe((data) => {
          const list = this.todoService.convertObjToArray(data);
          this.deleteEvent.emit(list);
        });
      });
    }
  }
}
