import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TodosService } from '../services/todos.service';
import { ButtonBaseComponent } from '../button-base/button-base.component';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [InputComponent, ButtonBaseComponent],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
 @Input() value = '';

 @Output() handleChangeEmit = new EventEmitter<any>();
 @Output() addTodoEmit = new EventEmitter<any>();
 @Output() deleteTodoEmit = new EventEmitter();

 
  handleChange(value: string) {
    this.handleChangeEmit.emit(value);
  }

  deleteDeo() {
    this.deleteTodoEmit.emit();
  }

  addTodo() {
    this.addTodoEmit.emit(this.value);
  }

  // addTodo() {
  //   this.addTodoEmit.emit(this.value);
  //   // if(this.value.trim().length) {
  //   //   this.todoService.addTodos(this.value);
  //   //   alert('Todo added successfully');
  //   //   this.value = '';
  //   // } else {
  //   //   alert('Please enter a valid todo');
  //   // }
  
  // }
}
