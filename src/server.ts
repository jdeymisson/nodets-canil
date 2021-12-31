//1º Importar as dependencias do projeto
import express, { Request, Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import mainRoutes from './routes/index';

//2º Configurar o dotenv
dotenv.config();

//3º Criar a variável server e estartar o express
const server = express();

//3º Configurar o template engine (Mustache)
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//4º Tornar a pasta public como statica
server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('<h2>Página não encontrada</h2>');
});

server.listen(process.env.PORT);