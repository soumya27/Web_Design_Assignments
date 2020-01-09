import { Component } from '@angular/core';
import {Todo} from './models/todo';
import {TodoService} from './services/todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoParent: Array<Todo>;

  constructor(todoService: TodoService) {
    const todos$: Observable<Array<Todo>> = todoService.getTodo();
    todos$.subscribe(todo => {
      this.todoParent = todo;
    });
  }

  addTodo(todo: Todo) {
    this.todoParent.push(todo);
  }
}
