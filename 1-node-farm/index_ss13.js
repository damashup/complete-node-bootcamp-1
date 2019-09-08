// SERVER

const http = require('http');
const url = require('url');
const fs = require('fs'); 

// TOP Level code (executed once when the code is first run):

// read API file synchronously
// NB: using synchronous version for one off read of file
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
// NB: to convert json to javascript
const dataObj = JSON.parse(data);


// CALLBACK function code (executed over and over again whenever client hits server):

const server = http.createServer((req, res) => { 
    const pathName = req.url
if(pathName === '/' || pathName === '/overview') {
    res.end('This is the overview')
} else if(pathName === '/product') {
    res.end('This is the product')    
} else if(pathName === '/api') { // create an api path
    // send back data from top level code
    res.end(data);
} else {
    res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
}
});


server.listen(8000, '127.0.0.1', ()=> {
    console.log('Listening to requests on port 8000')
})


