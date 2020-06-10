import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import rotasClientes from './routes/clientes';
import rotasPortfolio from './routes/portfolio';
import about from './routes/about';
import neuronios from './routes/neuronios';
import lula from './routes/lula'

const app = express();

/**
 * Configuração das páginas
 */
app.set('views', path.join(__dirname, 'views'));
//Estou informando a linguagem que estou utilizando
app.set('view engine', 'pug');

/**
 * Configuração dos recursos estáticos 
 */
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Configuração do Body Parser
 */
app.use(bodyParser.urlencoded({
    extended: false
}))

/**
 * Rotas de view
 */


//Criando a rota da página inicial
app.get('/', (req, res) => res.render('index'));

//Criando a rota de clientes
app.use('/clientes', rotasClientes);

//Criando a rota de portfólio
app.use('/portfolio', rotasPortfolio);

//Criando a rota de about
app.use('/about', about);

//Criando a rota de neuronios
app.use('/neuronios', neuronios);

//Criando a rota de neuronios
app.use('/lula', lula);

export default app;