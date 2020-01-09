import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoAreaComponent} from '../todo-area/todo-area.component';
import {TodoService} from '../services/todo.service';
import {Observable } from 'rxjs';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() todoAreaComponent: TodoAreaComponent;
  @Output() newTodoEmitted = new EventEmitter<Todo>();
  todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  // Method to call the todoservice's createTodo
  createTodo() {
    const newTodo$: Observable<Todo> = this.todoService.createTodo();
    newTodo$.subscribe(newTodo => {
      this.newTodoEmitted.emit(newTodo);
    });
  }

  ngOnInit() {
  }

}
