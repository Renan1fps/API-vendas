export interface Teste{
    nome: string
    valor: number
}


class Product implements Teste{
    nome: string;
    valor: number;

    constructor(nome: string, valor: number){
    this.nome=nome
    this.valor=valor
    }

}

