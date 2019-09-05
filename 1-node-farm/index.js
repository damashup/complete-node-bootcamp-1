//DOCUMENTATION 
//https://nodejs.org/dist/latest-v10.x/docs/api/

// 'require' the file system (fs) to read from and write to files 
const fs = require('fs');

// read data from the file (input.txt)
// place file into a variable textIn
const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');

// Log textIn to console
console.log(textIn);

// Use ES6 syntax to insert text and Javascript into a file 
const textOut = `This is what we know about the avocado: ${textIn}. Created on ${Date.now()}.`;
fs.writeFileSync('starter/output.txt', textOut);
console.log('File has been written!')