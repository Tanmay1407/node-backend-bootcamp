const http = require('http');

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello! This is an HTTP Web Server");
    } else if(req.url === '/namaste'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Namaste from HTTP Web Server");
    }
})

server.listen(port, hostname, ()=> {
    console.log(`Server is listening at http://${hostname}:${port}`)
})