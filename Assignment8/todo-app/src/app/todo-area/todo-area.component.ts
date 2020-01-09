import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {TodoService} from '../services/todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-area',
  templateUrl: './todo-area.component.html',
  styleUrls: ['./todo-area.component.scss']
})
export class TodoAreaComponent implements OnInit {
  @Input() todoChild: Array<Todo>;
  todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  createTodo() {
    const newTodo$: Observable<Todo> = this.todoService.createTodo();
    newTodo$.subscribe(newTodo => {
      this.todoChild.push(newTodo);
    });
  }

  ngOnInit() {
  }
}
