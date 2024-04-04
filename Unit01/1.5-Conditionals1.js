const prompt = require('prompt-sync')();

let age = prompt("What is your age? ");
if (age > 50){
    console.log("You qualify for the senior discount! ");
}
else if (age <= 15){
    console.log("You're not old enough to drive yet.");
}

let user_name = prompt("What is your name? ");

let length = user_name.length;
if (user_name === "Mr.J"){
    console.log("🐠");
}
if (length > 7){
    console.log("You have a long name.");
}

let name_length = prompt("How many letters is your name? ");
if (name_length == length){
    console.log("That's correct! ✔️");
}
else if (name_length > length){
    console.log("Too high ✖️");
}
else if (name_length < length){
    console.log("Too low ✖️");
}

if (age %2 === 0){
    console.log("Your age is an even number.");
}
else{
    console.log("Your age is an odd number.");
}
