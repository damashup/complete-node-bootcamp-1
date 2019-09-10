// ROUTING

const http = require('http');
// gets url data
const url = require('url');

// CREATE SERVER

const server = http.createServer((req, res) => {
    // get url info from the client
    const pathName = req.url

    // set if statements based on what the url is
if(pathName === '/' || pathName === '/overview') {
    // response to the client
    res.end('This is the overview');
} else if(pathName === '/product') {
    // response to the client
    res.end('This is the product');
} else {
    // fallback if url is unknown
    // respond with a 404 message in head
    res.writeHead(404, {
        // tells browser to expect html and text data
        'Content-type': 'text/html',
        // can add our own custom header information
        'my-own-header': 'hello-world'
    });
    // response to the browser for 404
    res.end('<h1>Page not found!</h1>');
}

});


server.listen(8000, '127.0.0.1', ()=> {
    console.log('Listening to requests on port 8000')
})




