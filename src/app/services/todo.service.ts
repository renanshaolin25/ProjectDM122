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

    addStatusPedido(task:StatusPedido){
        this.statusPedidos.push(task);
    }

    editStatusPedido(task:StatusPedido){
        console.log("Edit StatusPedido");
    }

    loadStatusPedidos(){
        return this.statusPedidos;
    }

    removeStatusPedido(task:StatusPedido){
        console.log("Remove task");
    }
}