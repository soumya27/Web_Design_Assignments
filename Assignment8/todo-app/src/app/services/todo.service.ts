import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Todo} from '../models/todo';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoResource: string;
  todoResourceURL: string;

  constructor(private http: HttpClient) {
    this.todoResource = 'todos';
    this.todoResourceURL = `${environment.serverBaseURL}/${this.todoResource}`;
  }

  /**
   * Returns all TO-DO items.
   */
  getTodo(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.todoResourceURL);
  }

  /**
   * Update TO-DO item
   */
  updateTodo( todo: Todo = null): Observable<Todo> {
    const todoItem: string = this.todoResourceURL + `/${todo.id}`;
    return this.http.put<Todo>(todoItem, todo);
  }

  /**
   * delete TO-DO item
   */
  deleteTodo(id: number): Observable<Todo> {
    const todoItem: string = this.todoResourceURL + `/${id}`;
    return this.http.delete<Todo>(todoItem);
  }
  /**
   * Creates new TO-DO item.
   */
  createTodo(todo: Todo = null): Observable<Todo> {
    let newTodo: Todo;
    newTodo = todo ? todo : new Todo('Enter Title Here', 'Enter Description here', new Date() );
    return this.http.post<Todo>(this.todoResourceURL, newTodo);
  }
}
