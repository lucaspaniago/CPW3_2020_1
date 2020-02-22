import PessoaView from './view/PessoaView';

let view = new PessoaView();

/**
 * Criando a função aoCalcularIMC que será atrelada à submissão do formulário
 */
window.aoCalcularIMC = event => {
    event.preventDefault();
    view.calcularIMC();
}