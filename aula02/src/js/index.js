import LojaView from './view/LojaView';

let lojaView = new LojaView();

/**
 * O evento onload é invocado automaticamente quando a página é carregada.
 */
window.onload = () => lojaView.renderizarTabelaDeClientes();