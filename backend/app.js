const path  =require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const userRoutes = require('./routes/user');
const sendRoutes = require('./routes/send');





mongoose.connect('mongodb+srv://jackson:P8qymJEzudfNXTyZ@cluster0.dvlixbv.mongodb.net/supercash?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true})
  .then(()=>{
    console.log('connected to database!');
  })
  .catch((error)=>{
    console.log('connection failed!' + error);
  });
  //mongoose.set('useCreateIndex', true);

//OJx2X4IllVNl9up4


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images" , express.static(path.join("images")));


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With ,Content-Type,Authorization ,Accept",
    "HTTP/1.1 200 OK",
    "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS,PUT"
  );
  next();
});





app.use("/api/user",userRoutes);
app.use("/api/send",sendRoutes);


module.exports = app;
