
const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const port = 4900;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.sendFile( __dirname + "/index.html");
})


app.post('/', (req,res) => {
    try
    {   setTimeout(() => {
        let num1 = Number(req.body.n2) / Number(Math.pow(req.body.n1,2));
        num1 = Math.floor(num1);
        
        res.send(`<h1>BMI = ${num1}</h1>`);
        },3000);   
    }
        
      

    catch(error)
    {
        console.log(error.message);
    }
   
})

app.listen(port, function(){
    console.log(`BMI Calculator Server is Running!`);
})