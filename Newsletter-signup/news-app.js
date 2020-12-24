
const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/',function(req,res){
res.sendFile(__dirname+'/signup.html');
});

app.post('/',function(req,res){
    console.log(req.body.fname);
});



app.listen(3000,function(){

    console.log('New server started at port 3000');
})



// Mail chimp APi key 38ef9d0e26806826ed168fc6eae47b89-us8

// List id f6b722d477
