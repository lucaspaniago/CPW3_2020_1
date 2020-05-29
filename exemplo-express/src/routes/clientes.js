import {Router} from 'express';

import ClienteController from '../controllers/ClienteControler';

const router = Router();
const clienteController = new ClienteController();

const QTDE_POR_PAGINA = 10;
const calcularQuantidadePaginas = () => Math.ceil(clienteController.quantidade() / QTDE_POR_PAGINA)

let paginaAtual = 1;


/**
 * Criando a rota da página Clientes
 */
router.get('/', (req, res) => {
    res.redirect('/clientes/1');
});

/**
 * Criando a rota da página de clientes com paginação
 */
router.get('/:pagina', (req,res) => {
    const pagina = req.params.pagina;
    const qtdePaginas = calcularQuantidadePaginas();
    paginaAtual = pagina >= 1 && pagina <= qtdePaginas ? pagina : paginaAtual;

    const indiceInicial = (paginaAtual - 1) * QTDE_POR_PAGINA;

    const clientes = clienteController.recuperarTodosComPaginacao(indiceInicial, QTDE_POR_PAGINA);
    res.render('clientes', {
        clientes,
        paginaAtual,
        ultimaPagina: qtdePaginas
    });
});

/**
 * Criando a rota para salvar um novo cliente
 */
router.post('/', (req, res) => {
    const cliente = req.body;

    clienteController.salvar(cliente);

    res.redirect(`/clientes/${calcularQuantidadePaginas()}`);
});

export default router;