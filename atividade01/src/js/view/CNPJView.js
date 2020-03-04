import CNPJController from '../controller/CNPJController';

export default class CNPJView {

    constructor() {
        this.controller = new CNPJController();
        /**
         * Seletor de elementos da página
         */
        this.$ = document.querySelector.bind(document);
    }

    validarCNPJ() {
        
        let cnpj = this.$('#campoDeEntrada').value;
        
        this.exibirValidacao(this.controller.validarCNPJ(cnpj));

    }

    exibirValidacao(resposta) {
        
        if(resposta) {
            this.$('#resultado').innerText = 'CNPJ válido';
        }
        else {
            this.$('#resultado').innerText = 'CNPJ inválido';
        }
    }

}