export class Pagamento {
    constructor(id_pedido, quantia, forma_de_pagamento) {
        this.id_pedido = id_pedido;
        this.quantia = quantia;
        this.forma_de_pagamento = forma_de_pagamento;
    }

    retornaProcessoDePagamento() {
        return `Processing payment of $${this.quantia} for Order ID: ${this.id_pedido} using ${this.forma_de_pagamento}`;
    }
}
