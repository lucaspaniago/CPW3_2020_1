export default class PessoaController {

    calcularIMC(pessoa) {
        let imc = pessoa.peso / Math.pow(pessoa.altura, 2);
        return imc;
    }
}