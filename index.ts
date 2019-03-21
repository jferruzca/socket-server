import Server from "./classes/server";
import router  from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// BodyParser : Nos permite empaquetar los parámetros para dar una respuesta json
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// Habilitar el CORS : Nos permite que puedan realizarse peticiones desde sitios que no se encuentren en el mismo dominio
server.app.use( cors({ origin: true, credentials: true }) );

// Rutas
server.app.use('/', router);

server.start( ()=>{
    console.log(`El servidor ha iniciado en el puerto: ${ server.port }`);
});