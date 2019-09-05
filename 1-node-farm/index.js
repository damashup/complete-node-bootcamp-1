// 'require' the file system (fs) to read from and write to files 
const fs = require('fs');

// read data from the file (input.txt)
// place file into a variable textIn
const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');

// Log textIn to console
console.log(textIn);

const textOut = `This is what we know about the avocado`