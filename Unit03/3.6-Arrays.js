/**
 * 3.6 - Arrays
 * Author: Grant Beaton
 * 
 **/


'use strict'; 
const prompt = require('prompt-sync')();

let arr = [56, 34, -99, "Hello", true, "Good bye", 0, -1, 42];

function print_array(arr){
    let p = 0;
    while (p >= arr){
        console.log(arr[p]);
        p ++;
    }
    }
print_array(arr);