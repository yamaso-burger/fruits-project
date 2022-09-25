const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});


const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    rating: 10,
    review: "So yummy!!"
});

// fruit.save();

const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    firstName: "Soichiro",
    lastName: "Yamauchi",
    age: 24
});

// person.save();

const kiwi = new Fruit({
    name : "Kiwi",
    score: 3,
    review: "The best fruit!"
});
const orange = new Fruit({
    name : "Orange",
    score: 2,
    review: "Too sour for me."
});
const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

function seeDB(){

    Fruit.find(function(err, fruits){
        if (err) {
            console.log(err);
        } else {
    
            mongoose.connection.close();
            console.log(fruits);
            fruits.forEach((fruit)=>{
                console.log(fruit.name);
            });
            process.exit(0);
    
        }
    });
}

function upadateData(id, name){

    Fruit.updateOne({_id: id}, {name: "Peach"}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully updated the document!");
            seeDB();
        }
    });
}

function deleteData(id){
    Fruit.deleteOne({_id: id}, function(err) {
        if (err) { 
            console.log(err);
        } else {
            console.log("Successfully delete!!");
            seeDB();
        }
    })
}

deleteData("632ec4f91f8cee902f6e564a");