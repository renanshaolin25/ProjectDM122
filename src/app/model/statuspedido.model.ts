import { Time } from "@angular/common";

export class StatusPedido{
    private id:number;
    private dataEmissao:string;
    private dataAtualizacao:string;
    private vendedor: string;
    private frete:number;
    private transportadora:string;
    private status: string;

    constructor(dataEmissao:string, dataAtualizacao:string, vendedor: string, frete:number, transportadora:string, status: string){
        this.id = Math.random() * 10000;
        this.dataEmissao = dataEmissao;
        this.dataAtualizacao = dataAtualizacao;
        this.vendedor = vendedor;
        this.frete = frete;
        this.transportadora = transportadora;
        this.status = status;
    }

    getId(): number{
        return this.id;
    }
    
    getDataEmissao(): string{
        return this.dataEmissao;
    }
    setDataEmissao(dataEmissao:string){
        this.dataEmissao = dataEmissao;
    }

    getDataAtualizacao(): string{
        return this.dataAtualizacao;
    }
    setDataAtualizacao(dataAtualizacao:string){
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
