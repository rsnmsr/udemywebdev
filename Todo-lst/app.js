const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let workList = []

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public')); // For seting up the public library for static css uploads
app.set('view engine', 'ejs');

var items = ['item1', 'item2'];

// Declaration for the databbase setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});



// All the declaration code for diff lib goes above and code below

app.get('/', function (req, res) {

    var option = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',

    };
    var today = new Date();
    var day = today.toLocaleDateString("en-US", option);

    res.render("list", {
        ListTitle: day,
        new_list_item: items
    });


});

app.post('/', function (req, res) {


    var input = req.body.todo_item;
    console.log(req.body);
    

    if (req.body.list === 'Work to be done') {
        workList.push(input);
        res.redirect('/work');
    } else {
        items.push(input);
        res.redirect('/');
    }
});

app.get('/work', function (req, res) {
    res.render('list', {
        ListTitle: "Work to be done",
        new_list_item: workList
    });
});

app.post('/work', function (req, res) {
    let word_tbd = req.body.todo_item;
    workList.push(word_tbd);
    res.redirect('/work');
});




app.listen(3000, function () {

    console.log("Server is running at port 3000");

});