//DOCUMENTATION 
//https://nodejs.org/dist/latest-v10.x/docs/api/


const fs = require('fs'); // 'require' the file system (fs) to read from and write to files 


// BLOCKING SYNCHRONOUS WAY 
const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8'); // read data from the file (input.txt), place file into a variable textIn
// console.log(textIn); // Log textIn to console
const textOut = `This is what we know about the avocado: ${textIn}. Created on ${Date.now()}.`; // Use ES6 syntax to insert text and Javascript into a file 
fs.writeFileSync('starter/output.txt', textOut);
// console.log('File has been written!')

// NON-BLOCKING ASYNCHRONOUS WAY / CALL BACK HELL!!
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1)=> {
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2)=> {
        fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3)=> {
            console.log(data3);
            fs.writeFile('./starter/txt/final.txt', `${data2}\n break!\n${data3}`, 'utf-8', err => {
                console.log(`Your file has been written! 😃`)
            })
        });
        console.log(`${data2}\n Now waiting for append.....` );
    });
});
console.log('Will read file.....')