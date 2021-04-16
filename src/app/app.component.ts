import { Component } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  todoList = []
  newTask: string;
  interval: any;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todoList) => {
      this.todoList = todoList;
    });

  }

  onAdd(todo) {
    if (todo === undefined || todo === '') {
      return;
    }
    this.todoService.addTodo(todo);
    this.newTask = '';
  }

  onClear() {
    this.todoService.removeAll();
  }
}

