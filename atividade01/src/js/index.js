import CPFView from './view/CPFView';
import CNPJView from './view/CNPJView';

let cpfView = new CPFView();
let cnpjView = new CNPJView();

window.validarCPF = () => {
    console.log('entrei');

    cpfView.validarCPF();

}

window.validarCNPJ = () => {
    console.log('entrei CNPJ');

    cnpjView.validarCNPJ();

}