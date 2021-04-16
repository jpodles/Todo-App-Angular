import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as moment from 'moment';


interface Todo {
  id: number,
  label: string,
  date: number,
  isDone: boolean
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = [];
  id: number = 0;

  constructor() {
    
    if (localStorage.getItem("todoList") === '[]' || localStorage.getItem("todoList") === null) {
      this.mockData();
    }
    else {
      this.todoList = JSON.parse(localStorage.getItem("todoList"));
    }
  }

  mockData() {
    const mock: string = 'mock data in todo service';
    this.todoList.push({ id: this.nextId(), label: mock, date: 1588291994000, isDone: false });
    this.todoList.push({ id: this.nextId(), label: mock, date: 1606970532000, isDone: true });
    this.todoList.push({ id: this.nextId(), label: mock, date: 1606780800000, isDone: false });
    this.todoList.push({ id: this.nextId(), label: mock, date: 1608000000000, isDone: true });
    this.todoList.push({ id: this.nextId(), label: mock, date: 1608077532000, isDone: false });
  }

  getTodos() {
    return of(this.todoList);
  }

  addTodo(todo: string) {
    let addedTodo = moment.utc().valueOf();

    console.log(todo);
    console.log(addedTodo);
    console.log(this.nextId());

    this.todoList.push({ id: this.nextId(), label: todo, date: addedTodo, isDone: false });
    this.setLocalStorage();
  }

  removeAll() {
    this.todoList.splice(0, this.todoList.length);
    this.setLocalStorage();
  }

  removeTodoById(todo: Todo) {
    let removeID = todo.id;
    let index = this.todoList.map((item) => {
      return item.id;
    }).indexOf(removeID);
    this.todoList.splice(index, 1);
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  nextId() {
    return this.id++;
  }

  setDone(todo) {
    todo.isDone ? todo.isDone = false : todo.isDone = true;
    this.setLocalStorage();
  }
}


//dzisiaj godzina
//wzoraj godzina
//miesiąc temu
//tydzien temu
//aktualizacja pipe