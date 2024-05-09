/**
 * 3.4 - For Loops
 * Author: Grant Beaton
 * 
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Part 1
//Task 1
let start = Number(prompt("Give me a low number to start at: "));//Gets number 1
let stop = Number(prompt("Give me a higher number to stop at: "));//Gets number 2

function countUp(start,stop){
    for (let p = start; p <= stop; p+= 1){//For loop, p grows
        console.log(p);//Prints p
    }
}
countUp(start,stop);//Calls the function

//Task 2
let start2 = Number(prompt("Give me a high number to start at: "));//Gets number 1
let stop2 = Number(prompt("Give me a lower number to stop at: "));//Gets number 2

function countDown(start2,stop2){
    for (let p2 = start2; p2 >= stop2; p2-= 1){//For loop, p shrinks
        console.log(p2);//Prints p
    }
}
countDown(start2,stop2);//Calls the function

//Part 2
//Task 1
function sum(number){
    let total = 0;
    for (let a= number; a >= 1; a-= 1){//For loop, a grows
        total = total + a;//Adds as value to total
    }
    return total;//Returns total
}
console.log(sum(Number(prompt("Give me a number higher than 1 to add all whole numbers below it together: "))));//Calls the function with a propmt that goes to number

//Task 2
let begin = Number(prompt("Give me a low number to start at: "));//Gets number 1
let end = Number(prompt("Give me a higher number to stop at: "));//Gets number 2

function count4(begin, end){
    let total = 0;
    for (let e= begin; e <= end; e+= 1){//For loop, e grows
        if (e % 4 == 0){//Checks if it's divisble by 4
            total += 1;//Adds 1 to total
     }
    }
    return total;//Returns total
    }

console.log("Between the two numbers that you gave, there are " + count4(begin, end) + " numbers that are divisible by 4.");//Calls the function and prints to explain what happened

//Task 3
let n = prompt("Give me a high number with plenty of factors: ");//Gets number 1
let x = prompt("Give me a number that will divide the previous number: ");//Gets number 2

function sum_divisible(n, x){
    let total = 0;
    for (let i= n; i >= 1; i--){//For loop, i shrinks
        if (i % x == 0){//Checks if the current i value is divisble by x
            total += Number(i);//Adds i to total
        }
    }
    return total;//Returns total
}
console.log("If you were to find the numbers from 0 to the first number you gave, then if they were divisble by the second number you gave, and added them all togheter, you would get " + sum_divisible(n, x)); //Calls the function and prints to explain what happened