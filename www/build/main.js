webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_statuspedido_model__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_todo_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_model_status_model__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/* Pages */

var AddPedidoPage = /** @class */ (function () {
    function AddPedidoPage(navCtrl, navParams, todoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoService = todoService;
        this.status = ["Transporte", "Executando", "Processando"];
        this.statusPedido = new __WEBPACK_IMPORTED_MODULE_2__app_model_statuspedido_model__["a" /* StatusPedido */](null, null, "", 0, "", "");
        this.selectedStatus = "";
    }
    AddPedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskPage');
    };
    AddPedidoPage.prototype.salvar = function () {
        this.statusPedido.setStatus(__WEBPACK_IMPORTED_MODULE_4__app_model_status_model__["a" /* Status */][this.selectedStatus]);
        this.todoService.addStatusPedido(this.statusPedido);
        //retornando para página home
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    AddPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-pedido',template:/*ion-inline-start:"/home/renan/Desktop/Pós Dev Mobile and Clound/DM122/ProjectDM122/src/pages/add-pedido/add-pedido.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Pedido</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col width-100>\n          <ion-list>\n            <form (ngSubmit)="salvar()">\n              <ion-item>\n                <ion-label>Vendedor</ion-label>\n                <ion-input [(ngModel)]="statusPedido.vendedor" name="name" type="text"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>Frete</ion-label>\n                <ion-input [(ngModel)]="statusPedido.frete" name="detail" type="number"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Transportadora</ion-label>\n                  <ion-input [(ngModel)]="statusPedido.transportadora" name="name" type="text"></ion-input>\n                </ion-item>\n              <ion-item>\n                <ion-label>Status</ion-label>\n                <ion-select [(ngModel)]="selectedStatus" name="selectedStatus">\n                  <ion-option [value]="s" *ngFor="let s of status">\n                    {{s}}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n              <button ion-button type="submit" block>Salvar</button>\n            </form>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"/home/renan/Desktop/Pós Dev Mobile and Clound/DM122/ProjectDM122/src/pages/add-pedido/add-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_todo_service__["a" /* TodoService */]])
    ], AddPedidoPage);
    return AddPedidoPage;
}());

//# sourceMappingURL=add-pedido.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_todo_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_status_model__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Pages */

var DetailPedidoPage = /** @class */ (function () {
    function DetailPedidoPage(navCtrl, navParams, todoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoService = todoService;
        this.status = ["Transporte", "Executando", "Processando"];
        this.statusPedido = navParams.get("pedido");
        this.selectedStatus = "";
    }
    DetailPedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskPage');
    };
    DetailPedidoPage.prototype.atualizar = function () {
        this.statusPedido.setStatus(__WEBPACK_IMPORTED_MODULE_3__app_model_status_model__["a" /* Status */][this.selectedStatus]);
        this.todoService.editStatusPedido(this.statusPedido);
        //retornando para página home
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    DetailPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-pedido',template:/*ion-inline-start:"/home/renan/Desktop/Pós Dev Mobile and Clound/DM122/ProjectDM122/src/pages/detail-pedido/detail-pedido.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Atualizar Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <ion-list>\n          <form (ngSubmit)="atualizar()">\n            <ion-item>\n              <ion-label>Vendedor</ion-label>\n              <ion-input [(ngModel)]="statusPedido.vendedor" disabled="true" name="name" type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Frete</ion-label>\n              <ion-input [(ngModel)]="statusPedido.frete" disabled="true" name="detail" type="number"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Transportadora</ion-label>\n              <ion-input [(ngModel)]="statusPedido.transportadora" disabled="true" name="name" type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Status</ion-label>\n              <ion-select [(ngModel)]="selectedStatus" name="selectedStatus">\n                <ion-option [value]="s" *ngFor="let s of status">\n                  {{s}}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n            <button ion-button type="submit" block>Atualizar</button>\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/renan/Desktop/Pós Dev Mobile and Clound/DM122/ProjectDM122/src/pages/detail-pedido/detail-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_todo_service__["a" /* TodoService */]])
    ], DetailPedidoPage);
    return DetailPedidoPage;
}());

//# sourceMappingURL=detail-pedido.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-pedido/add-pedido.module": [
		273,
		1
	],
	"../pages/detail-pedido/detail-pedido.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPedido; });
var StatusPedido = /** @class */ (function () {
    function StatusPedido(dataEmissao, dataAtualizacao, vendedor, frete, transportadora, status) {
        this.id = Math.random() * 10000;
        this.dataEmissao = name;
        this.dataAtualizacao = dataAtualizacao;
        this.vendedor = vendedor;
        this.frete = frete;
        this.transportadora = transportadora;
        this.status = status;
    }
    StatusPedido.prototype.getId = function () {
        return this.id;
    };
    StatusPedido.prototype.getDataEmissao = function () {
        return this.dataEmissao;
    };
    StatusPedido.prototype.setDataEmissao = function (dataEmissao) {
        this.dataEmissao = dataEmissao;
    };
    StatusPedido.prototype.getDataAtualizacao = function () {
        return this.dataAtualizacao;
    };
    StatusPedido.prototype.setDataAtualizacao = function (dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    };
    StatusPedido.prototype.getFrete = function () {
        return this.frete;
    };
    StatusPedido.prototype.setFrete = function (frete) {
        this.frete = frete;
    };
    StatusPedido.prototype.getVendedor = function () {
        return this.vendedor;
    };
    StatusPedido.prototype.setVendedor = function (vendedor) {
        this.vendedor = vendedor;
    };
    StatusPedido.prototype.getTransportadora = function () {
        return this.transportadora;
    };
    StatusPedido.prototype.setTransportadora = function (transportadora) {
        this.transportadora = transportadora;
    };
    StatusPedido.prototype.getStatus = function () {
        return this.status;
    };
    StatusPedido.prototype.setStatus = function (status) {
        this.status = status;
    };
    return StatusPedido;
}());

//# sourceMappingURL=statuspedido.model.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Status; });
var Status = [];
Status["Transporte"] = "priority-high";
Status["Executando"] = "priority-medium";
Status["Processando"] = "priority-low";
//# sourceMappingURL=status.model.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_detail_pedido_detail_pedido__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_pedido_add_pedido__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_todo_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/*Pages*/


/*Services*/

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_detail_pedido_detail_pedido__["a" /* DetailPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_pedido_add_pedido__["a" /* AddPedidoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-pedido/add-pedido.module#AddPedidoPageModule', name: 'AddPedidoPage', segment: 'add-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-pedido/detail-pedido.module#DetailPedidoPageModule', name: 'DetailPedidoPage', segment: 'detail-pedido', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_detail_pedido_detail_pedido__["a" /* DetailPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_add_pedido_add_pedido__["a" /* AddPedidoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_todo_service__["a" /* TodoService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/renan/Desktop/Pós Dev Mobile and Clound/DM122/ProjectDM122/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/renan/Desktop/Pós Dev Mobile and Clound/DM122/ProjectDM122/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_statuspedido_model__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService() {
        this.statusPedidos = new Array();
        this.statusPedidos.push(new __WEBPACK_IMPORTED_MODULE_1__model_statuspedido_model__["a" /* StatusPedido */](new Date(), null, "Lojas Edimil", 45.25, "Cometa 1", "priority-high"));
        this.statusPedidos.push(new __WEBPACK_IMPORTED_MODULE_1__model_statuspedido_model__["a" /* StatusPedido */](new Date(), null, "Lojas Cem", 90.25, "Cometa 2", "priority-medium"));
        this.statusPedidos.push(new __WEBPACK_IMPORTED_MODULE_1__model_statuspedido_model__["a" /* StatusPedido */](new Date(), null, "Casas Bahia", 135.25, "Cometa 3", "priority-low"));
    }
    TodoService.prototype.addStatusPedido = function (statusPedido) {
        statusPedido.setDataEmissao(new Date());
        statusPedido.setDataAtualizacao(new Date());
        this.statusPedidos.push(statusPedido);
    };
    TodoService.prototype.editStatusPedido = function (statusPedido) {
        statusPedido.setDataAtualizacao(new Date());
        this.statusPedidos.forEach(function (pedido) {
            if (pedido.getId() == statusPedido.getId()) {
                pedido = statusPedido;
            }
        });
    };
    TodoService.prototype.loadStatusPedidos = function () {
        return this.statusPedidos;
    };
    TodoService.prototype.removeStatusPedido = function (statusPedidos) {
        console.log("Remove task");
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TodoService);
    return TodoService;
}());

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_pedido_detail_pedido__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_pedido_add_pedido__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_todo_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Services */

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, todoService) {
        this.navCtrl = navCtrl;
        this.todoService = todoService;
        this.statusPedidos = this.todoService.loadStatusPedidos();
    }
    HomePage.prototype.goToDetailPedido = function (statusPedido) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_pedido_detail_pedido__["a" /* DetailPedidoPage */], {
            pedido: statusPedido
        });
    };
    HomePage.prototype.deleteItem = function (statusPedido) { };
    HomePage.prototype.goToAddPedido = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_pedido_add_pedido__["a" /* AddPedidoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/renan/Desktop/Pós Dev Mobile and Clound/DM122/ProjectDM122/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      O que devo fazer\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-label>Status</ion-label>\n        <ion-input [(ngModel)]="statusPedido.vendedor" disabled="true" name="name" type="text"></ion-input>\n      </ion-item>\n  <ion-list>\n    <ion-item-sliding *ngFor="let sp of statusPedidos" [ngClass]="sp.status">\n      <ion-item>\n        <h2>{{sp.id}}</h2>\n        <p>{{sp.vendedor}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button (click)="goToDetailPedido(sp)" color="secondary" large><ion-icon name="create"></ion-icon></button>\n        <button ion-button (click)="deleteItem(sp)" color="danger" large><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item></ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab (click)="goToAddPedido()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/renan/Desktop/Pós Dev Mobile and Clound/DM122/ProjectDM122/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__app_services_todo_service__["a" /* TodoService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map