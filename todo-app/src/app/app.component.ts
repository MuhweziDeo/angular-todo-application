import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, AddTodoComponent, ListTodoComponent],
  // providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
}
