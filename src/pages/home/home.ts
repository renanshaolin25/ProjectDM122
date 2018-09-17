import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPedidoPage } from '../detail-pedido/detail-pedido';
import { AddPedidoPage } from '../add-pedido/add-pedido';
/* Services */
import { TodoService } from '../../app/services/todo.service'
import { StatusPedido } from '../../app/model/statuspedido.model';
import { Status } from '../../app/model/status.model';
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
  statusPedidos:Array<StatusPedido>;
  selectedStatus: string;
  selectedTransportadora: string;
  selectedVendedor: string;
  status = ["Transporte", "Executando", "Processando"];

constructor(public navCtrl: NavController, private todoService:TodoService) {
  this.loadStatusPedidos();
  this.selectedStatus = "";
  this.selectedTransportadora = "";
  this.selectedVendedor = "";
}
loadStatusPedidos(){
  this.statusPedidos = this.todoService.loadStatusPedidos();
  this.selectedStatus = "";
  this.selectedTransportadora = "";
  this.selectedVendedor = "";
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
  if(this.selectedStatus !== "" || this.selectedTransportadora !== "" || this.selectedVendedor !== ""){
    this.statusPedidos = this.todoService.loadStatusPedidosByFilter(Status[this.selectedStatus], this.selectedTransportadora, this.selectedVendedor);

  }
}

}

