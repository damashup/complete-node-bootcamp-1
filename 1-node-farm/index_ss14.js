// SERVER

const http = require('http');
const url = require('url');
const fs = require('fs'); 

// TOP Level code (executed once when the code is first run):

// function that takes a template (temp) and replaces placeholders with data (in product)
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);


    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    // output final HTML
    return output
};

// read page templates
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8');

// read API data
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
// convert API json into Javascript object
const dataObj = JSON.parse(data);


// CREATE SERVER
// CALLBACK function code (executed over and over again whenever client hits server):

const server = http.createServer((req, res) => { 
    const pathName = req.url

// Overview page
if(pathName === '/' || pathName === '/overview') {
    // tells browser to expect html and text data
    res.writeHead(200, {'Content-type': 'text/html'});

    // map the API data
    // loop over the dataObj
    // in each iteration replace the placeholder in template card with current element
    // convert into a string using join
    const cardsHTML = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    // replace the product cards placeholder with our string of products
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML)
    //console.log(cardsHTML);

    // send template to browser
    res.end(output);

// Product page    
} else if(pathName === '/product') {
    res.end('This is the product');
    
// API    
} else if(pathName === '/api') { 
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


