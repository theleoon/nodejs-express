console.log("Iniciando o servidor Http");
const http = require('http');

const ip = "localhost";
const porta = 3001

/*const configServer = function(){
    resp.writeHead();
    resp.end();
};*/

// method chain
http.createServer(function(req, resp) {
    console.log("Recebendo uma REQ");
    console.log(req.url);
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('Ola mundo Node.JS com Express');
}).listen(porta, ip);