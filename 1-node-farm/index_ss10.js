// FILE SYSTEM

const fs = require('fs'); // 'require' the file system (fs) to read from and write to files 

// NON-BLOCKING ASYNCHRONOUS WAY / CALL BACK HELL!!

// read start.txt file
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1)=> {
    // use content of start.txt file to indentify the next file to read
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2)=> {
        // get the content of append.txt
        fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3)=> {
            console.log(data3);
            // append the content of the append file (data3) to the content of the data1 fle (data 2)
            // then write the concatenated content to the final.txt file
            fs.writeFile('./starter/txt/final.txt', `${data2}\n break!\n${data3}`, 'utf-8', err => {
                console.log(`Your file has been written! 😃`)
            })
        });
        console.log(`${data2}\n Now waiting for append.....` );
    });
});
console.log('Will read file.....')