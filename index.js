require('dotenv').config()
// imports from packages
const express = require('express');
const mongoose = require('mongoose');
const admin = require('./middlewares/admin');

//init
const PORT = process.env.PORT || 3000;
const app = express();
const DB = process.env.MONGO_DB_URI

//imports from other files
const authRouter = require("./routes/auth");
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
// console.log(process.env.A)
//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


//Connections
mongoose.connect(DB).then(()=> {
 console.log('connected to the database');   
}).catch(e=>{
    console.log(e);
});



app.listen(PORT,"0.0.0.0", ()=>{
console.log(`connected at port ${PORT}`);
});

