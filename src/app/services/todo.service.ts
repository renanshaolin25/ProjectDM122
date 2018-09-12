import { Injectable } from '@angular/core';
import { StatusPedido } from '../model/statuspedido.model';
import { Storage } from '@ionic/storage';

@Injectable()
export class TodoService{
    
    statusPedidos:Array<StatusPedido>;

    constructor(){
        this.statusPedidos = new Array<StatusPedido>();
        this.statusPedidos.push(new StatusPedido(new Date(), null, "Lojas Edimil", 45.25, "Cometa 1", "priority-high"));
        this.statusPedidos.push(new StatusPedido(new Date(), null, "Lojas Cem", 90.25, "Cometa 2", "priority-medium"));
        this.statusPedidos.push(new StatusPedido(new Date(), null, "Casas Bahia", 135.25, "Cometa 3", "priority-low"));
    }

    addStatusPedido(statusPedido:StatusPedido){
        statusPedido.setDataEmissao(new Date());
        statusPedido.setDataAtualizacao(new Date());
        this.statusPedidos.push(statusPedido);
    }

    editStatusPedido(statusPedido:StatusPedido){
        statusPedido.setDataAtualizacao(new Date());
        this.statusPedidos.forEach(pedido => {
            if(pedido.getId() == statusPedido.getId()){
                pedido = statusPedido;
            }
        });
    }

    loadStatusPedidos(){
        this.statusPedidos = this.statusPedidos.sort((obj1, obj2) => {
            if (obj1.getDataAtualizacao > obj2.getDataAtualizacao) {
                return 1;
            }
        
            if (obj1.getDataAtualizacao < obj2.getDataAtualizacao) {
                return -1;
            }
        
            return 0;
        });

        return this.statusPedidos;
    }

    loadStatusPedidosPerFilter(statusPedidos:Array<StatusPedido>){
        statusPedidos = statusPedidos.sort((obj1, obj2) => {
            if (obj1.getDataAtualizacao > obj2.getDataAtualizacao) {
                return 1;
            }
        
            if (obj1.getDataAtualizacao < obj2.getDataAtualizacao) {
                return -1;
            }
        
            return 0;
        });

        return statusPedidos;
    }

    removeStatusPedido(statusPedidos:StatusPedido){
        console.log("Remove task");
    }
}