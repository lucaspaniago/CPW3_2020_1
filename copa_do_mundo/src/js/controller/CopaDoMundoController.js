import CopaDoMundoDAO from "../model/dao/CopaDoMundoDAO";

export default class CopaDoMundoController {
    
    constructor() {
        this.CopaDoMundoDAO = new CopaDoMundoDAO();
    }

    recuperarCopas() {
        return this.CopaDoMundoDAO.recuperarTodas();
    }
}