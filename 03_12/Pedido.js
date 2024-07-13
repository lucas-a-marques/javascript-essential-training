export class Pedido {
    constructor(id_pedido, id_usuario, produtos) {
        this.id_pedido = id_pedido;
        this.id_usuario = id_usuario;
        this.produtos = produtos; // array of Product objects
    }

    retornaDetalhesDoPedido() {
        return `Order ID: ${this.id_pedido}, User ID: ${this.id_usuario}, Products: ${this.produtos.map(produto => produto.retornaDetalhesDoProduto()).join(', ')}`;
    }
}
