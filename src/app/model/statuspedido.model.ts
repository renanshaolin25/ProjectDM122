import { Time } from "@angular/common";

export class StatusPedido{
    private id:number;
    private dataEmissao:Date;
    private dataAtualizacao:Date;
    private vendedor: string;
    private frete:number;
    private transportadora:string;
    private status: string;

    constructor(dataEmissao:Date, dataAtualizacao:Date, vendedor: string, frete:number, transportadora:string, status: string){
        this.id = Math.random() * 10000;
        this.dataEmissao = name;
        this.dataAtualizacao = dataAtualizacao;
        this.vendedor = vendedor;
        this.frete = frete;
        this.transportadora = transportadora;
        this.status = status;
    }

    getId(): number{
        return this.id;
    }
    
    getDataEmissao(): Date{
        return this.dataEmissao;
    }
    setDataEmissao(dataEmissao:Date){
        this.dataEmissao = dataEmissao;
    }

    getDataAtualizacao(): Date{
        return this.dataAtualizacao;
    }
    setDataAtualizacao(dataAtualizacao:Date){
        this.dataAtualizacao = dataAtualizacao;
    }

    getFrete(): number{
        return this.frete;
    }
    setFrete(frete:number){
        this.frete = frete;
    }

    getVendedor(): string{
        return this.vendedor;
    }
    setVendedor(vendedor:string){
        this.vendedor = vendedor;
    }

    getTransportadora(): string{
        return this.transportadora;
    }
    setTransportadora(transportadora:string){
        this.transportadora = transportadora;
    }

    getStatus(): string{
        return this.status;
    }
    setStatus(status:string){
        this.status = status;
    }



    
}
