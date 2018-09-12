import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusPedido } from '../../app/model/statuspedido.model';
import { TodoService } from '../../app/services/todo.service';
import { Status } from '../../app/model/status.model';
/* Pages */
import { HomePage } from '../home/home';
@IonicPage()

@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})

export class TaskPage {
  statusPedido: StatusPedido;
  selectedStatus: string;
  Status = ["Transporte", "Executando", "Processando"];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private todoService: TodoService) {
    this.statusPedido = new StatusPedido(null, null, "", 0, "", "");
    this.selectedStatus = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  salvar() {
    this.statusPedido.setStatus(Status[this.selectedStatus]);
    this.todoService.addStatusPedido(this.statusPedido);
    //retornando para página home
    this.navCtrl.push(HomePage);
  }

}