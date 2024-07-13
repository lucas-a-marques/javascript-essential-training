export class Produto {
    constructor(id_produto, nome, preco, categoria) {
        this.id_produto = id_produto;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    retornaDetalhesDoProduto() {
        return `Product ID: ${this.id_produto}, Name: ${this.nome}, Price: ${this.preco}, Category: ${this.categoria}`;
    }
}