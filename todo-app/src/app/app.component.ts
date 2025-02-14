import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodosService } from './services/todos.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTodoComponent, ListTodoComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected todos: string[] = [];
  protected search = '';
  $jsonTodos: Observable<{
    todos: { id: number; todo: 'string'; completed: boolean }[];
  }> = new Observable();
  value = '';
  title = 'todo-app';
  constructor(private todoService: TodosService) {
    this.$jsonTodos = this.todoService.getAsyncTodos();
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo(value: string) {

  }

  deleteTodo() {

  }
  handleChange(value: string) {

  }

  handleSearch(value: string) {
    console.log(value, '---->')
  }
}
