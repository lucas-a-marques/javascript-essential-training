export class Usuario {
    constructor(id_usuario, nome, email) {
        this.id_usuario = id_usuario;
        this.name = nome;
        this.email = email;
    }

    retornaDetalhesDoUsuario() {
        return `User ID: ${this.id_usuario}, Name: ${this.nome}, Email: ${this.email}`;
    }
}
