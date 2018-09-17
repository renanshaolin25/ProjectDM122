import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DetailPedidoPage } from '../pages/detail-pedido/detail-pedido';
import { AddPedidoPage } from '../pages/add-pedido/add-pedido';

/*Pages*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/*Services*/
import { TodoService } from './services/todo.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPedidoPage,
    AddPedidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPedidoPage,
    AddPedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
