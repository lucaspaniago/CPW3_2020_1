import CPFController from '../controller/CPFController';

export default class CPFView {
    
    constructor() {
        this.controller = new CPFController();
        /**
         * Seletor de elementos da página
         */
        this.$ = document.querySelector.bind(document);
    }

    validarCPF() {
        
        let cpf = this.$('#campoDeEntrada').value;
        
        this.exibirValidacao(this.controller.validarCPF(cpf));

    }

    exibirValidacao(resposta) {
        
        if(resposta) {
            this.$('#resultado').innerText = 'Verdadeiro';
        }
        else {
            this.$('#resultado').innerText = 'Falso';
        }
    }
}