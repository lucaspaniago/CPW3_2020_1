import faker from 'faker';

export default class ClienteController {

    constructor() {
        this.clientes = [];

        const QTD_CLIENTES = 95;

        for(let i = 0; i < QTD_CLIENTES; i++) {
            const cliente = {
                nome: faker.name.findName(),
                email: faker.internet.email()
            };

            this.salvar(cliente);
        }

    }

    recuperarTodos() {
        return this.clientes;
    }

    recuperarTodosComPaginacao(inicio, quantidadePorPagina) {
        return this.clientes.slice(inicio, inicio + quantidadePorPagina);
    }

    salvar(cliente) {
        this.clientes.push(cliente);
    }

    quantidade() {
        return this.clientes.length;
    }


}