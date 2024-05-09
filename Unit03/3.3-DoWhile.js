/**
 * 3.3 - Do While
 * Author: Grant Beaton
 * 
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Task 1
function negative_only(){
    let input;//Pre-calls input
    do{
        input = Number(prompt("Give me a negative number: "));//Makes input a prompt from the user, will continue to ask
    }
    while (input > -1);//Unless number is negative
}
negative_only()//Calls the function

//Task 2
function printOdd(n){
    let number = 0;
    do{
        while (n > 0){
            number = Number(number);
            n--;
            if (number % 2 != 0){
                console.log(number);
                number++;
        }
            else{
                number++;
            }
    }
    }
    while (isNaN(n));
}
printOdd(Number(prompt("Give me a random number: ")));

//Task 3
function parrotUntilQuit(){
    let word = prompt("Give me a random word (don't type quit): ");
    do{
        if (word != "quit"){
            console.log("Give me a random word (don't type quit):");

        }
        else if (word == "quit"){
            console.log("Goodbye!");
            word = "done";
        }
    }
    while (word == "quit");
    }

parrotUntilQuit();

//Task 4
function factorial(n){
    let count = n;
    let fact = n;
    let realfact;
    do{
        while (count > 0){
            fact = (n*count);
            count --;
            realfact = realfact + fact
        }
        return realfact;
    }
    while ((isNaN(n)) || (n > 0));

}
console.log(factorial(Number(prompt("Give me a positive, whole number: "))));