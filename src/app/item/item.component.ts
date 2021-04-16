import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';



@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todo;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.addStrike();
    this.changeBgColor();
  }

  changeBgColor() {
    return this.checkIfDone() ? '#A5D6A7' : '#EEEEEE';
  }

  addStrike() {
    return this.checkIfDone() ? 'line-through' : 'none';
  }

  checkIfDone() {
    return this.todo.isDone ? true : false;
  }

  onDone(todo) {
    this.todoService.setDone(todo);
  }
  onDelete(todo) {
    this.todoService.removeTodoById(todo);
  }
}
