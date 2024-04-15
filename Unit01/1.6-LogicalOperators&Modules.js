const prompt = require('prompt-sync')();

let game = prompt("Do you want to play a game? (y/n): ");

if ((game == "y") || (game == "")){
    console.log("It's time to play.")
let num1 = prompt("Enter a random number. ");
num1 = Number(num1);

if ((num1 > 10) && (num1 < 50)){
    console.log("Your next number should be greater than 50.");
}

let num2 = prompt("Enter a second random number. ");
num2 = Number(num2);

if (num2 % 2 == 0){
    console.log("Your next number should be odd. ");
}
else{
    console.log("Your next number should be even. ");
}

let num3 = prompt("Enter a third random number. ");
num3 = Number(num3);
let extra = Number(1);

let sum = (num1 + num2 + num3 + extra);

if (sum %10 == 0){
    console.log("Your set of three numbers are Squirrelly. ")
}
else {
    console.log("Your set of numbers are not Squirrelly. ")
}

if ((num1 %3 == 0) && (num2 %3 == 0) || (num1 %3 ==0) && (num3 %3 == 0) || (num2 %3 == 0) && (num3 %3 == 0)){
    console.log("Your set of numbers are Jazzy. ");
}
else{
    console.log("Your set of numbers are not Jazzy. ");
}
}
else{
    console.log("Alright, we won't play a game then. ")
}