const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});


const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
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

Fruit.insertMany([kiwi, orange, banana], function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});