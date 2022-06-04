// Core or 3rd party modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

// Directives
import { TodoDirective } from './directives/todo.directive';

// Services
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    //   Components
    TodoComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoListComponent,
    EditModalComponent,

    // Directives
    TodoDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  exports: [TodoComponent],
})
export class TodoModule {}
