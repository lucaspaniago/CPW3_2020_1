import ClienteDAO from '../model/dao/ClienteDAO';

export default class LojaController {
    
    constructor() {
        this.clienteDAO = new ClienteDAO();
    }

    recuperarClientes() {
        return this.clienteDAO.recuperarTodos();
    }
}