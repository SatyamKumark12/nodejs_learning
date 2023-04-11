


// app.get('/' ,(req ,res) => {
//     console.log("Here");
//     console.log("Request send by Browser Data",req.query.name);
//     res.send("Hi , This is a Home Page");
// })

// app.get('/about' ,(req ,res) => {
//     console.log("Here");
//     res.send("Hi , This is a About Page");
// })

// app.get('/contact' ,(req ,res) => {
//     console.log("Here");
//     res.send("Hi , This is a Contact Page");
// })


//  HTML and JSON


// app.get('/' ,(req ,res) => {
//     res.send(`<h1>Hi , This is a Home Page</h1>
//     <a href="/about">Go to About Page</a>
//     `);
// })

// app.get('/about' ,(req ,res) => {
//     res.send(`<input type = "text" placeholder="username" value="${req.query.name}" />
//     <button>Click Me</button>
//     <a href="/">Go to About Page</a>
//     `);
// })

// app.get('/contact' ,(req ,res) => {
//     console.log("Here");
//     res.send([{
//             name : "Shyam",
//             username : "shyam@gmail.com"
//         },
//         {
//             name : "Ram",
//             username : "ram@gmail.com"
//     }]);
// })


// const express = require("express");
// const path = require('path');
// const app = express()

// const publicPath = path.join(__dirname,'public');

// console.log(publicPath);

// app.use(express.static(publicPath));

// app.get('' ,(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about' ,(_,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('*' ,(_,res)=>{
//     res.sendFile(`${publicPath}/pagenotfound.html`)
// })

// app.listen(3000);  


// Application Middleware

const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router(); 

route.use(reqFilter)

// app.use(reqFilter)

app.get('/' , (req,res)=>{
    res.send("Welcome to Home Page");
})

app.get('/users' , (req,res)=>{
    res.send("Welcome to Home Page");
})

route.get('/about' ,  (req,res)=>{
    res.send("Welcome to About Page");
})

route.get('/contact' ,  (req,res)=>{
    res.send("Welcome to Contact Page");
})

app.use('/',route);


app.listen(3000);  
