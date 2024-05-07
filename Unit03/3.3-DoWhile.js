/**
 * 3.3 - Do While
 * Author: Grant Beaton
 * 
 * Lesson link:  go.brash.ca/3U-3.1-While-Loops
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Task 1
function negative_only(){
    let input;
    do{
        input = Number(prompt("Give me a negative number: "));
    }
    while (input > -1);
}
negative_only()

//Task 2

let n;
function printOdd(n){
    do{
        n = Number(prompt("Give me a random number: "));
        let number = 1;
        while (number % 2 == 0){
            console.log(number);
            number++;
        }
    }
    while(n < 1);
}
printOdd(n);