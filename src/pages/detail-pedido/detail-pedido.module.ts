import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPedidoPage } from './detail-pedido';

@NgModule({
  declarations: [
    DetailPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPedidoPage),
  ],
})
export class DetailPedidoPageModule {}
