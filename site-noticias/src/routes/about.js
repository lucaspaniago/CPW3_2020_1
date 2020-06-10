import {Router} from 'express';

//import ClienteController from '../controllers/ClienteControler';

const router = Router();
//const clienteController = new ClienteController();

/**
 * Criando a rota da página Clientes
 */
router.get('/', (req, res) => res.render('about'));

export default router;