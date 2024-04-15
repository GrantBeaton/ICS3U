const prompt = require('prompt-sync')();

let game = prompt("Do you want to play a game? (y/n): ");

if (game == "y"){
let num1 = prompt("Enter a random number. ");

if ((num1 > 10) && (num1 < 50)){
    console.log("Your next number should be greater than 50.");
}

let num2 = prompt("Enter a second random number. ");

if (num2 % 2 == 0){
    console.log("Your next number should be odd. ");
}
else{
    console.log("Your next number should be even. ");
}

let num3 = prompt("Enter a third random number. ");

if (num1 + num2 + num3 + 1 %10 == 0){
    console.log("Your set of three numbers are Squirrelly. ")
}
else {
    console.log("Your set of numbers is not Squirrelly. ")
}

if ((num1 %3 == 0) || (num2 %3 == 0) || (num3 %3 ==0)){
    console.log("Your set of numbers are Jazzy. ");
}
else{
    console.log("Your set of numbers are not Jazzy. ");
}
}
else{
    console.log("Alright, we won't play a game then. ")
}