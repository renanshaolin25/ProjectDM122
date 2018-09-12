import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPedidoPage } from '../detail-pedido/detail-pedido';
import { AddPedidoPage } from '../add-pedido/add-pedido';
/* Services */
import { TodoService } from '../../app/services/todo.service'
import { StatusPedido } from '../../app/model/statuspedido.model';
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
  statusPedidos:Array<StatusPedido>;
  selectedStatus: string;
  status = ["Transporte", "Executando", "Processando"];

constructor(public navCtrl: NavController, private todoService:TodoService) {
  this.statusPedidos = this.todoService.loadStatusPedidos();
  this.selectedStatus = "";
}

goToDetailPedido(statusPedido:StatusPedido){
  this.navCtrl.push(DetailPedidoPage, {
    pedido: statusPedido});
}

deleteItem(statusPedido:StatusPedido){}

goToAddPedido(){
  this.navCtrl.push(AddPedidoPage)
}

filterStatusPedidos(){
  this.statusPedidos = this.todoService.loadStatusPedidosPerFilter(this.statusPedidos);
}

}

