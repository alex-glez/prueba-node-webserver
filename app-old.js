const http = require('http');
const { Http2ServerResponse } = require('http2');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Yo',
            edad: 1000,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola mundo web');
        res.end();
    })
    .listen(8080);

console.log('escuchando 8080');