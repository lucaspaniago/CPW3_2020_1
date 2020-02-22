import Pessoa from '../model/Pessoa';
import PessoaControler from '../controller/PessoaController';

export default class PessoaView {
    constructor() {
        this.controller = new PessoaControler();
        /**
         * Seletor de elementos da página
         */
        this.$ = document.querySelector.bind(document);
    }

    calcularIMC() {
        /**
         * Pega os valores de peso e altura do formulário
         */
        //consigo usar também document.getElementById .. queryselecto ou getelementbyid
        let peso = this.$('#peso').value;
        let altura = this.$('#altura').value;
        
        /**
         * Instancia (cria) o objeto de pessoa
         */
        let pessoa = new Pessoa(peso, altura);

        /**
         * Invoca o controller para calcular o IMC da pessoa
         */
        let imc = this.controller.calcularIMC(pessoa);

        this.exibirIMC(imc);
    }

    exibirIMC(imc) {
        let resultado = `O seu IMC é de ${imc.toFixed(1)}`;
        this.$('#resultado').innerText = resultado;
    }
}