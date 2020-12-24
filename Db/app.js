const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    ratings: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     ratings: 4,
//     review: "An apple a day keeps the doctor away"
// });

// const kiwi = new Fruit({
//     name: "Kiwi",
//     ratings: 3,
//     review: "Stucks in throat"
// });

// const pineapple = new Fruit({
//     name: "Pine apple",
//     ratings: 5,
//     review: "Sour and tasty"
// });

// Fruit.insertMany([fruit, kiwi, pineapple], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully saved");
//     }
// })

const grape = new Fruit({
    name:"grape",
    ratings: 8,
    review:"Little heavens in the mouth"
});
//grape.save();

// Fruit.updateOne({_id :"5eb174aa71a12607dc2f42fa"},{name:"RoseBerry"},function(err){
//     if(err){
//         console.log(err);
  
//     }else{
//         console.log("Operatin done successfully");
//     }
// });

// Fruit.deleteOne({_id:"5eb174aa71a12607dc2f42fa"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Last entry deleted successfully");
        
//     }

// });


// Fruit.find(function (err, fruit) {
//     if (err) {
//         console.log(err);
//     } else {
//         fruit.forEach(fruit => {
//             console.log(fruit.name);
//             mongoose.connection.close();
//         });
//     }
// });


const personSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const Person = mongoose.model("Person",personSchema);

const person1 = new Person({
    name:"Roshan1",
    age:24
});


Person.deleteMany({name:"Roshan1"},function(err){
    if(err){
        console.log(Err);
    }else{
        console.log("Multiple johns deleted simultaneously");
        
    }
});
person1.save();
Person.find(function (err, person1) {
    if (err) {
        console.log(err);
    } else {
        person1.forEach(person1 => {
            console.log(person1.name);
            mongoose.connection.close();
        });
    }
});

