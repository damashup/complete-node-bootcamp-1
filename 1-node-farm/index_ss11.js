// SERVER

const http = require('http');

// create server
const server = http.createServer((req, res) => {
    console.log(req)
    res.end('Hello from the server!')
})

// listen to incoming requests from client
// listen at a port (e.g. 8000, a sub-address on a host) and a host (e.g. local host (127.0.0.1))
// optional calback function
server.listen(8000, '127.0.0.1', ()=> {
    console.log('Listening to requests on port 8000')
})

// Then fire up server (e.g. node <file name> in terminal)
// vist the address (e.g. 127.0.0.1:8000)
// ctrl c to close server
