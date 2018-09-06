import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/* Services */
import { TodoService } from '../../app/services/todo.service'
import { Task } from '../../app/model/task.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title:string = "DM122";

  constructor(public navCtrl: NavController, private todoService:TodoService) {
    this.todoService.addTask(new Task("","",""));
    this.todoService.editTask(new Task("","",""));
    this.todoService.removeTask(new Task("","",""));
    this.todoService.loadTasks();
  }
}
