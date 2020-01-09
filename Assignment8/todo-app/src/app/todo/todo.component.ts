import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../models/todo';
import {TodoService} from '../services/todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() updateTodoEmitted = new EventEmitter<Todo>();
  classObject: object = {
    todo: true ? 'todo' : ''
  };
  styleObject: object;
  todoService: TodoService;
  show: boolean;
  sign: string;

  constructor(todoService: TodoService) {
    this.show = false;
    this.sign = '+';
    this.todoService = todoService;
  }

  // Method to update the to-do item
  updateTodo(todo: Todo) {
    const updateTodo$: Observable<Todo> = this.todoService.updateTodo(todo);
    updateTodo$.subscribe(updateTodo => {
      this.updateTodoEmitted.emit(updateTodo);
    });
  }

  // Method to make description collapsible
  updateValue() {
    this.show = !this.show;
    if (!this.show) {
      this.sign = '+';
    } else {
      this.sign = '-';
    }
  }

  // Method to toggle the to-do status and the checkbox on the UI
  updateStatus(todo: Todo) {
    todo.status = !todo.status;
    const selectionDone = document.getElementById('todo-' + todo.id).getElementsByClassName('done')[0] as HTMLInputElement;
    selectionDone.checked = todo.status;
    this.updateTodo(todo);
  }

  // Method to delete a to-do item
  deleteTodo(todo: Todo) {
    const deleteTodo$: Observable<Todo> = this.todoService.deleteTodo(todo.id);
    deleteTodo$.subscribe(deleteTodo => {
      this.updateTodoEmitted.emit(deleteTodo);
    });
  }

  ngOnInit() {
  }
}
