import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TodosStore } from './todo.store';

export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  providers: [TodosStore],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of myTodos()">
      {{ todo.title }}
      <button (click)="handleUpdate(todo)">Update</button>
      <button (click)="handleDelete(todo)">Delete</button>
    </div>
  `,
})
export class AppComponent implements OnInit {
  private readonly componentStore = inject(TodosStore);
  readonly myTodos = this.componentStore.todos;

  ngOnInit(): void {
    this.componentStore.getTodos();
  }

  handleUpdate(todo: Todo) {
    this.componentStore.updateTodo(todo);
  }

  handleDelete(todo: Todo) {
    this.componentStore.deleteTodo(todo);
  }
}
