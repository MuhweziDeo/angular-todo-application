import { Component, Input } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-todo',
  imports: [CommonModule],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.scss'
})
export class ListTodoComponent {
  @Input() todos: string[] = [];
  @Input() $jsonTodos: Observable<{todos: {id: number, todo: 'string', completed: boolean}[]}> = new Observable();
}
