import { Injectable } from '@angular/core';
import { StatusPedido } from '../model/statuspedido.model';
import { Storage } from '@ionic/storage';

@Injectable()
export class TodoService{
    
    statusPedidos:Array<StatusPedido>;
    filterStatusPedidos:Array<StatusPedido>;

    constructor(){
        this.statusPedidos = new Array<StatusPedido>();
        this.statusPedidos.push(new StatusPedido(new Date().toLocaleDateString(), null, "Lojas Edimil", 45.25, "Cometa 1", "priority-high"));
        this.statusPedidos.push(new StatusPedido(new Date().toLocaleDateString(), null, "Lojas Cem", 90.25, "Cometa 2", "priority-medium"));
        this.statusPedidos.push(new StatusPedido(new Date().toLocaleDateString(), null, "Casas Bahia", 135.25, "Cometa 3", "priority-low"));
    }

    addStatusPedido(statusPedido:StatusPedido){
        statusPedido.setDataEmissao(new Date().toLocaleDateString());
        statusPedido.setDataAtualizacao(new Date().toLocaleDateString());
        this.statusPedidos.push(statusPedido);
    }

    editStatusPedido(statusPedido:StatusPedido){
        statusPedido.setDataAtualizacao(new Date().toLocaleDateString());
        this.statusPedidos.forEach(pedido => {
            if(pedido.getId() == statusPedido.getId()){
                pedido = statusPedido;
            }
        });
    }

    loadStatusPedidos() {      
        return this.orderList(this.statusPedidos);
    }

    orderList(pedidos: Array<StatusPedido>) {
        pedidos = pedidos.sort((obj1, obj2) => {
             if (obj1.getDataAtualizacao > obj2.getDataAtualizacao) {
                 return 1;
             }

             if (obj1.getDataAtualizacao < obj2.getDataAtualizacao) {
                 return -1;
             }

             return 0;
         });
         return pedidos;
    }

    removeStatusPedido(statusPedidos:StatusPedido){
        console.log("Remove task");
    }

    loadStatusPedidosByFilter(status: string, transportadora: string, vendedor: string) {
        this.filterStatusPedidos = new Array<StatusPedido>();
         this.statusPedidos.forEach((item, index) => {
             if (transportadora === "" && vendedor === "" && status !== "") {
                 if (item.getStatus() == status) this.filterStatusPedidos.push(item);
             } else if (transportadora !== "" && vendedor === "" && status === "") {
                 if (item.getTransportadora() == transportadora) this.filterStatusPedidos.push(item);
             } else if (transportadora === "" && vendedor !== "" && status === "") {
                 if (item.getVendedor() == vendedor) this.filterStatusPedidos.push(item);
             } else if (transportadora !== "" && vendedor !== "" && status === "") {
                 if (item.getTransportadora() == transportadora && item.getVendedor() == vendedor) this.filterStatusPedidos.push(item);
             } else if (transportadora === "" && vendedor !== "" && status !== "") {
                 if (item.getVendedor() == vendedor && item.getStatus() == status) this.filterStatusPedidos.push(item);
             } else if (transportadora !== "" && vendedor === "" && status !== "") {
                 if (item.getTransportadora() == transportadora && item.getStatus() == status) this.filterStatusPedidos.push(item);
             } else if (transportadora !== "" && vendedor !== "" && status !== "") {
                 if (item.getTransportadora() == transportadora && item.getVendedor() == vendedor && item.getStatus() == status) this.filterStatusPedidos.push(item);
             }
         });
        return this.orderList(this.filterStatusPedidos);
    }
}