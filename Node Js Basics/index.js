// const fs = require('fs');
// console.log("-->" , --fileName);

// console.log("This is a Global Module");


// const fs = require('fs');
// fs.writeFileSync('abc.txt' , "This is Non-Global module");

// console.log(__dirname);

// console.log(__filename);

// const colors = require('colors');
 
// console.log('hello'.green); 

// outputs green text

// console.log(100 + 20);




//  Make a basic Static API

// const http = require('http');
// const data = require('./data');

// http.createServer((req, resp)=>{
//     resp.writeHead(200,{'Content-Type':'Application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);


// How to get input from Command Line

// console.log(process.argv[2]);


const fs = require('fs');
const input = process.argv;

if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4])
} else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
} else {
    console.log("Invalid Input");
}
