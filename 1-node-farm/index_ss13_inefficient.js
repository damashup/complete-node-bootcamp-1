

const http = require('http');
const url = require('url');
const fs = require('fs'); 


// inefficient very basic version 
// because file is read every time user requests data


// CREATE SERVER

const server = http.createServer((req, res) => {
    
    const pathName = req.url

if(pathName === '/' || pathName === '/overview') {
    res.end('This is the overview');
} else if(pathName === '/product') {
    res.end('This is the product');    
} else if(pathName === '/api') { // create an api path
    // read the json file from our directory
    fs.readFile(`${__dirname}/starter/dev-data/data.json`, 'utf-8', (err,data)=> {
        // NB: to convert json to javascript
        const productData = JSON.parse(data);
        // tell browser we are sending back JSON
        res.writeHead(200, {'Content-type': 'application/json'});
        // respond with the data
        res.end(data);
    })    
    
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

