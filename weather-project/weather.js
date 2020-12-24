const express = require('express');
const https = require('https');
const bodyparser=require('body-parser');



const app = express();
app.use(bodyparser.urlencoded({extended:true}));


app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
   
});

app.post('/',function(req,res){
    const city = req.body.cityname; // This line is possible due to body parser
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=0dbd13c3030ff73fad847624b1cc4fbe&units=metric';
    
    //The htpps module is used to fectch data from the local server to the api server

    https.get(url,function(response){
   // Response on receiving data: parsing the data in json format and storing the data variable weather_data
   //  The different data from the json tree (like humidity and temp) is extracted using the .methods 
   //console.log(response.statusCode);
    response.on('data',function(data){
        var weather_data = JSON.parse(data);

       var humidity = weather_data.main.humidity;
       var temp = weather_data.main.temp;
       const icon = 'http://openweathermap.org/img/wn/'+weather_data.weather[0].icon+'@2x.png';
    
       res.write('<p>The current temperature of '+city+' is '+temp+' oC</p>');
       res.write('<br><p>The humdity in '+city+' is '+humidity+'%</p>');
       res.write("<img src="+icon+">");
       res.send();
    });

    });

    
});

app.listen(3000,function(){
    console.log('Server running at port 3000');
});