const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
   res.sendFile(__dirname +"/index.html")
});


app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+'/bmiCalculator.html')
});
app.post('/bmiCalculator',function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(height*height);
    res.send('Your BMI is '+bmi);

});

app.post('/',function(req,res){
    var nm1 = Number(req.body.num1);
    var nm2  = Number(req.body.num2);
    var nm3 = nm1+nm2;
    res.send('The sum of the two numbers is '+nm3);

});

app.listen(3000,function(){
    console.log('server running on port 3000');
});