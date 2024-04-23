const prompt = require('prompt-sync')();

let user_name = prompt("What's your name? ");
let age = prompt("Hello " + user_name + " how old are you? ");

if (age > 16){
    console.log("You are old enough to drive.");
}
else{
    console.log("You are not old enough to drive yet.");
}

console.log("1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");

let selection = parseInt(prompt("Hi " + user_name + ". Please make a selection "));

if (selection === 1){
    console.log("Let's play!");
}
else if (selection === 2){
    console.log("You selected Options.");
}
else if (selection === 3){
    console.log("No new DLC at this time.");
}
else if (selection === 4){
    console.log("Everything is up to date.");
}
else if (selection === 5){
    console.log("Bye.");
}
else{
    console.log("Invalid selection.");
}
//Optional Challenge 1
let hour = prompt("Enter an hour between 0 and 23, with no minutes: ");

if (hour <= 11){
    console.log("Good morning!");
}
else if ((hour <= 17) && (hour >= 12)){
    console.log("Good afternoon!");
}
else if ((hour <= 23) && (hour >= 18)){
    console.log("Good evening!");
}
else{
    console.log("Invalid hour!");
}
//Optional Challenge 2
let random_number = Math.random() * 10;    
random_number = Math.floor(random_number);

if (random_number == 0){
    console.log("The random number was 0.");
}
if (random_number % 2 == 0){
    console.log("The random number is even.");
}
if ((random_number % 2 == 0) && (random_number % 3 == 0)){
    console.log("The random number is divisible by 2 and 3.")
}
if ((random_number == 0) || (random_number == 1) || (random_number == 2) || (random_number == 3) || (random_number == 5) || (random_number == 7)){
    console.log("The random number is a prime number.")
}




