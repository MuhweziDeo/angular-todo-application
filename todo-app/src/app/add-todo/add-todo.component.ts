import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
 protected value = '';

 constructor(
  private todoService: TodosService
 ) { 

 }
 
  handleChange(value: string) {
    this.value = value;
    console.log(this.value, '--->')
  }

  addTodo() {
    if(this.value.trim().length) {
      this.todoService.addTodos(this.value);
      alert('Todo added successfully');
      this.value = '';
    } else {
      alert('Please enter a valid todo');
    }
  
  }
}
