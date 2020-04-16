import CopaDoMundoController from "../controller/CopaDoMundoController";

export default class CopaDoMundoView {

    constructor() {
        this.copaDoMundoController = new CopaDoMundoController();
    }

    renderizarTabelaDeCopas() {
        let copas_do_mundo = this.copaDoMundoController.recuperarCopas();

        //let tabela = document.createElement('table');

        let cabecalho = this.criarCabecalhoDaTabelaDeCopas();
        let corpo = this.criarCorpoDaTabelaDeCopas(copas_do_mundo);

        // tabela.insertAdjacentHTML('beforeend', cabecalho);
        // tabela.insertAdjacentHTML('beforeend', corpo);

        let tabela = `<table>${cabecalho}${corpo}</table>`

        document.getElementById('visualizacaoClientes').innerHTML = tabela;
    }

    criarCabecalhoDaTabelaDeCopas() {
        let cabecalho = `
            <thead>
                <tr>
                    <th>Seleção Campeã</th>
                    <th>Ano</th>
                    <th>Técnico</th>
                    <th>Seleção Derrotada</th>
                </tr>
            </thead>
        `;

        return cabecalho;
    }

    criarCorpoDaTabelaDeCopas(copas_do_mundo) {
        let corpo = '';

        copas_do_mundo.forEach(copa => {
            let copaStr = `
                <tbody>
                    <tr>
                        <td>${copa.pais_campeao}</td>
                        <td>${copa.ano}</td>
                        <td>${copa.tecnico}</td>
                        <td>${copa.pais_derrotado}</td>
                    </tr>
                </tbody>
            `;

            corpo += copaStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`;

        return tbody;
    }
}