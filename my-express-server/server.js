const express = require('express');
const app = express();
app.get('/', function(req,res){
    res.send('<em>Hello Roshan </em>');

});

app.get('/about',function(req,res){
    res.send("<p>This page is just an experiment for a newbie! Thanks </p>");
});

app.get('/contact',function(req,res){
    res.send('<h1><ul><li> Phone : 625521226</li><li>email : rkm56854@gmail.com</li></ul></h1>');
});
app.listen(3000,function(){
console.log("Server running at port 3000");
});