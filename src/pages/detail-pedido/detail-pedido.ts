
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusPedido } from '../../app/model/statuspedido.model';
import { TodoService } from '../../app/services/todo.service';
import { Status } from '../../app/model/status.model';
/* Pages */
import { HomePage } from '../home/home';
@IonicPage()

@Component({
  selector: 'page-detail-pedido',
  templateUrl: 'detail-pedido.html',
})

export class DetailPedidoPage {
  statusPedido: StatusPedido;
  selectedStatus: string;
  status = ["Transporte", "Executando", "Processando"];
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private todoService: TodoService) {
    this.statusPedido = navParams.get("pedido");
    this.selectedStatus = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  atualizar() {
    this.statusPedido.setStatus(Status[this.selectedStatus]);
    this.todoService.editStatusPedido(this.statusPedido);
    //retornando para página home
    this.navCtrl.push(HomePage);
  }

}

