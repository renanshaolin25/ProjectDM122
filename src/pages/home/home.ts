import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskPage } from '../task/task';
/* Services */
import { TodoService } from '../../app/services/todo.service'
import { StatusPedido } from '../../app/model/statuspedido.model';
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
  statusPedidos:Array<StatusPedido>;
constructor(public navCtrl: NavController, private todoService:TodoService) {
  this.statusPedidos = this.todoService.loadStatusPedidos();
}

editItem(statusPedido:StatusPedido){}

deleteItem(statusPedido:StatusPedido){}

goToTask(){
  this.navCtrl.push(TaskPage)
}

}

