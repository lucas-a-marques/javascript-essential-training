import { Produto } from './Produto.js';
import { Usuario } from './Usuario.js';
import { Pedido } from './Pedido.js';
import { Carrinho } from './Carrinho.js';
import { Pagamento } from './Pagamento.js';

// Create instances of classes
const novo_usuario = new Usuario(1, 'John Doe', 'john.doe@example.com');
console.log(novo_usuario.retornaDetalhesDoUsuario());

const produto1 = new Produto(101, 'Laptop', 999.99, 'Electronics');
const produto2 = new Produto(102, 'Smartphone', 599.99, 'Electronics');
console.log(produto1.retornaDetalhesDoProduto());
console.log(produto2.retornaDetalhesDoProduto());

const novo_carrinho = new Carrinho();
novo_carrinho.adicionaProduto(produto1);
novo_carrinho.adicionaProduto(produto2);
console.log(novo_carrinho.retornaDetalhesDoCarrinho());

const novo_pedido = new Pedido(1001, user.id, [product1, product2]);
console.log(order.retornaDetalhesDoPedido());

const novo_pagamento = new Pagamento(order.orderId, 1599.98, 'Credit Card');
console.log(novo_pagamento.retornaProcessoDePagamento());
