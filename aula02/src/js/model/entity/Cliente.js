export default class Cliente {

    constructor(nome, cpf, endereco, telefone) {
        Object.assign(this, {nome, cpf, endereco, telefone});
        /**
         * A linha acima é igual a fazer isso:
         * this.nome = nome;
         * this.cpf = cpf;
         * this.endereco = endereco;
         * this.telefone = telefone;
         * 
         * // o nome das variáveis precisam ser iguais aos dos argumentos do construtor, a ordem não importa.
         */
    }
}