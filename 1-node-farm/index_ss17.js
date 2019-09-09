
// Core modules
const http = require('http');
const url = require('url');
const fs = require('fs'); 

// IMPORT OWN modules;
const replaceTemplate = require('./starter/modules/replaceTemplate');

// TOP Level code (executed once when the code is first run):


const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// CALLBACK function code (executed over and over again whenever client hits server):

const server = http.createServer((req, res) => {

    // Parse url info
    // ES6 destructor url info to get query and pathname info:
    const { query, pathname} = url.parse(req.url, true);


// Overview page
if(pathname === '/' || pathname === '/overview') {

    res.writeHead(200, {'Content-type': 'text/html'});
    const cardsHTML = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML)
    res.end(output);

// Product page    
} else if(pathname === '/product') {
    res.writeHead(200, {'Content-type': 'text/html'});
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);
    
// API    
} else if(pathname === '/api') { 
    res.end(data);

// Not found    
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


