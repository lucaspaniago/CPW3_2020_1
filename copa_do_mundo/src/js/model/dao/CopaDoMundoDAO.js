import CopaDoMundo from "../entity/CopaDoMundo";
import * as db from "../../db/copa_do_mundo.json";

export default class CopaDoMundoDAO {
    recuperarTodas() {
        
        let copas_do_mundo = db.copas_do_mundo.map(copa => new CopaDoMundo(copa.pais_campeao, copa.ano, copa.tecnico, copa.pais_derrotado));

        return copas_do_mundo;
    }
}