const express = require('express');
const app = express();

const mongoose= require("mongoose")
require("./db/conn")

app.use(express.json());
app.use(require('./router/auth'));

const middleware = (req , res, next) =>{
    console.log("hello middleware")
    next();
}


const PORT = process.env.PORT || 5000;   


app.listen( PORT, ()=>{
    console.log(` the server is running at port no. ${PORT}`)
});