const fs = require('fs')

console.log('First line')


// let data = fs.readFileSync('f1.txt')    // * readFileSync will run Synchronously
// console.log('file 1 data -> '+data)     // * Synchronous

// * Asynchronous

fs.readFile('f1.txt', cb1)     // * readFile will run Asynchronously

function cb1(err, data){
    if(err){
        console.log(err)
    }
    console.log('file 1 data -> '+data)
}


console.log('Last line')