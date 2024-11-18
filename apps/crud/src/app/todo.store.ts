import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap, catchError, EMPTY } from 'rxjs';
import { TodosService } from './todos.service';
import { Todo } from './app.component';

interface TodoState {
  todos: Todo[];
}

@Injectable()
export class TodosStore extends ComponentStore<TodoState> {
  private readonly todosService = inject(TodosService);

  readonly todos = this.selectSignal((state) => state.todos);

  readonly getTodos = this.effect<void>((todos$) => {
    return todos$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap(() =>
        this.todosService.getTodos().pipe(
          //👇 Act on the result within inner pipe.
          tap({ next: (todos) => this.addTodos(todos) }),
          // 👇 Handle potential error within inner pipe.
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly updateTodo = this.effect<Todo>((todo$) => {
    return todo$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap((todo: Todo) =>
        this.todosService.updateTodo(todo).pipe(
          //👇 Act on the result within inner pipe.
          tap({ next: (todo) => this.update(todo) }),
          // 👇 Handle potential error within inner pipe.
          catchError(() => EMPTY)
        )
      )
    );
  });

  readonly deleteTodo = this.effect<Todo>((todo$) => {
    return todo$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap((todo) => this.todosService.delete(todo)),
      tap({ next: (todo) => this.deleteTest(todo) })
    );
  });

  private readonly addTodos = this.updater((state, todos: Todo[]) => ({
    todos,
  }));

  private readonly update = this.updater((state, todo: Todo) => ({
    todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
  }));

  private readonly deleteTest = this.updater((state, todo: Todo) => {
    console.log('todo', todo);
    return { todos: state.todos.filter((t) => t.id !== todo.id) };
  });

  constructor() {
    super({ todos: [] });
  }
}
