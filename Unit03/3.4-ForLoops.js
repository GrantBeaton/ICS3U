/**
 * 3.4 - For Loops
 * Author: Grant Beaton
 * 
 * Lesson link:  go.brash.ca/3U-3.1-While-Loops
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Part 1
//Task 1
let start = Number(prompt("Give me a low number to start at: "));
let stop = Number(prompt("Give me a higher number to stop at: "));

function countUp(start,stop){
    for (let p = start; p <= stop; p+= 1){
        console.log(p);
    }
}
countUp(start,stop);

//Task 2
let start2 = Number(prompt("Give me a high number to start at: "));
let stop2 = Number(prompt("Give me a lower number to stop at: "));

function countDown(start2,stop2){
    for (let p2 = start2; p <= stop2; p2+= 1){
        console.log(p2);
    }
}
countDown(start2,stop2);


