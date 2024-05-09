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
function printOdd(n){//Calls the value of n through the function
    let number = 0;
    do{
        while (n > 0){//Continues while n is greater than 0
            number = Number(number);
            n--;//Takes one away from n, don't want infinite loop
            if (number % 2 != 0){//If number is odd
                console.log(number);//Prints it
                number++;//Number increases
        }
            else{
                number++;//Else, number increases
            }
    }
    }
    while (isNaN(n));//Stops if n is not a number
}
printOdd(Number(prompt("Give me a random number: ")));//Calls the value for n while also calling the function

//Task 3
function parrotUntilQuit(){
    let word = prompt("Give me a random word (don't type quit): "); //Gets a word from the user
    do{
        if (word != "quit"){//If the word is not quit, asks again
            console.log("Give me a random word (don't type quit):");

        }
        else if (word == "quit"){//If the word is quit
            console.log("Goodbye!");//Prints Goodbye!
            word = "done";//Change word to not make an infinite loop
        }
    }
    while (word == "quit");//Stops the do if the word is quit
    }

parrotUntilQuit();

//Task 4
function factorial(n){//Calls n through the function
    let fact = 1;
    do{
        if (n == 0){//The factorial of 0 is 1
            return 1;
        } 
        while (n >= 1) {//While n is greater or equal to 1, it continues
            fact = fact * n;//Does the math part
            n--;//Takes one from n to continue the formula
        } 
        return fact;//Returns the product
    }
    while ((isNaN(n)) || (n > 0));//Doesn't run if n is less than 0 or is not a number
}
console.log(factorial(Number(prompt("Give me a positive, whole number: "))));//Prints the returned value