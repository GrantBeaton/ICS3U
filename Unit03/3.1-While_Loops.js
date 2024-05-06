/**
 * 3.1 - While Loops
 * Author: Grant Beaton
 * 
 * Lesson link:  go.brash.ca/3U-3.1-While-Loops
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Task 1
let start = 10; //Sets the start value
let stop = 0; 
let count = 0; 

function countdown(start, stop, count){//The function
    while (start > stop){//while loop checks if start is more htan stop
        console.log(start);
        start = start - 1;//Takes one away from start
        count = count + 1;//Adds one to count
    }

return count;//Returns count, that tells the amount of times it ran.

}
console.log(countdown(start, stop, count));//Prints count


//Task 2

let min = 0;//Sets the min value
let max = 20;

function randInt(min, max){//Function that gets a random number
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
randInt(min, max);
stop = randInt(min, max);//Makes stop a random number
let number = "numbertemp";


function random_until(min, max, stop){//Tracks the min, max and stop values along with creating a number variable
    if (max > min){
    }
    else{
        return - 1;//Returns -1 if min is greater than max
    }
    if ((stop >= min) && (stop <= max)){   
    }
    else{
        return - 1;//Returns -1 if stop is greater or equal to min and less than or equal to max
    }
    randInt(min, max);
    number = randInt(min, max);//Makes number a random number
    console.log(number);//Prints its value

while (number != stop){
    randInt(min, max);
    number = randInt(min, max);
    console.log(number);//If number and stop aren't equal, it prints number
}
return stop;//Returns stop
}

console.log(random_until(min, max, stop));//Prints the value of value

//Task 3
let n1 = 0;//Sets the n values as placeholder 0s 
let n2 = 0;

let userenter = prompt("Do you have numbers that need averaging (y/n) ");//Queues up the call on the function

function average(n1, n2){

    while (userenter == "y"){
        let n = Number(prompt("How many numbers do you have to average? "));//Asks how many numbers they have to average, sets as n
        let ogn = n;//Makes ogn, which is the original n value
        while (n > 0){//while true, gains a new number, adds it value to n2, and reduces n
            n1 = Number(prompt("Give me a number: "));//Asks the user for the number
            n2 = n2 + n1;
            n = n - 1;
    }
        let average = (n2 / ogn);//Calculates the average
        userenter = "no longer";//Stops userenter, so that we don't get an infinite while loop
        return average;
   } 
   while (userenter == "n"){
    console.log("Well then, Bye, Bye, Bye, BYE BYE! - NSync");
    userenter = "no longer";//Stops userenter, so that we don't get an infinite while loop
   }
}
    while (userenter == "y"){
        console.log("The average is " + average(n1, n2));//Prints "The average is ___"
    }