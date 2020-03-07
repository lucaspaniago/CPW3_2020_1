import Cliente from "../entity/Cliente";
import * as db from "../../db/loja.json";

export default class ClienteDAO {

    recuperarTodos() {
        /**
         * Poderia retornar assim (ele retornaria um objeto genérico com os clientes):
         * return db.clientes;
         */
        let clientes = db.clientes.map(cliente => new Cliente(cliente.nome, cliente.cpf, cliente.endereco, cliente.telefone));

        return clientes;
    }
}