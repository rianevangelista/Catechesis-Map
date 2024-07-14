// importar dependencia
import express from 'express';
import path from 'path';
import pages from './pages.js';

const __dirname = import.meta.dirname;

// iniciando o express
const server = express()
server
    // utilizar body do req
    .use(express.urlencoded({ extended: true }))

    // utilizando os arquivos estáticos
    .use(express.static(__dirname + '../../' + '/public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/church', pages.church)
    .get('/churchs', pages.churchs)
    .get('/create-church', pages.createChurch)
    .post('/save-church', pages.saveChurch)

// ligar o servidor
server.listen(5500)