const mongoose =require('mongoose');
const DB = "mongodb+srv://khushi:khushikumawat@cluster0.jz5javr.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB ).then(()=>{console.log('connection successful to remote database');
}).catch((err)=>{console.log(err);})
