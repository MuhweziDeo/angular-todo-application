import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  protected todos: string[] = ['go home', 'learn how to trade', 'buy wrx'];
  protected jsonTodos: {id: number, todo: 'string', completed: boolean}[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    return this.todos;
  }

  addTodos(todo: string) {
    this.todos.push(todo);
  }

  getAsyncTodos() {
    return this.http.get<{todos: {id: number, todo: 'string', completed: boolean}[]}>('https://dummyjson.com/todos');
  }
}
