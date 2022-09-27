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
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    firstName: "Soichiro",
    lastName: "Yamauchi",
    age: 24
});

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

// pineapple.save();

const person2 = new Person({
    firstName: "Amy",
    lastName: "Targaryen",
    age: 12,
    favoriteFruit: pineapple
});

// person2.save();

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

function upadateData(id){

    Person.updateOne({_id: id}, {favoriteFruit: kiwi}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully updated the document!");
            seeDB();
        }
    });
}

upadateData("632e6aac83cb4956f3ac45d6");


function deleteData(id){
    Person.deleteOne({_id: id}, function(err) {
        if (err) { 
            console.log(err);
        } else {
            console.log("Successfully delete!!");
            seeDB();
        }
    })
}
// deleteData("633247790d1a12dceeeaacf5");

function deleteDataMultiple(){
    Fruit.deleteMany({name: /Kiwi/}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully deleted");
            seeDB();
        }
    })
}

// deleteDataMultiple();

// seeDB();