import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  @Input() task?: Task;
  @Output() updateTaskEvent: EventEmitter<any> = new EventEmitter();

  form!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.task?.name),
      description: new FormControl(this.task?.description),
      priority: new FormControl(this.task?.priority),
    });
  }

  updateTask() {
    const body: Task = {
      ...this.form.value,
      id: this.task?.id,
    };

    this.todoService.updateTask(body).subscribe(() => {
      this.todoService.getTask().subscribe((data) => {
        const list = this.todoService.convertObjToArray(data);
        this.updateTaskEvent.emit(list);
        this.activeModal.close('Close Modal');
      });
    });
  }
}
