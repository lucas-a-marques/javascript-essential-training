export class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionaProduto(produto) {
        this.produtos.push(produto);
    }

    removeProduto(id_produto) {
        this.produtos = this.produtos.filter(produto => produto.id !== id_produto);
    }

    retornaDetalhesDoCarrinho() {
        return this.produtos.map(produto => produto.retornaDetalhesDoProduto()).join(', ');
    }
}
