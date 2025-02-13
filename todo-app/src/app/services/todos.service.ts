import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  protected todos: string[] = [];
  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodos(todo: string) {
    this.todos.push(todo);
  }
}
