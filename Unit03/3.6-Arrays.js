/**
 * 3.6 - Arrays
 * Author: Grant Beaton
 * 
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Practice Task 1
function print_array(){
    let arr = [56, 34, -99, "Hello", true, "Good bye", 0, -1, 42];
    let p = 0;
    while (p <= arr.length - 1){
    console.log(arr[p]);
    p++;
    }
}
print_array();

//Practice Task 2
function min(){
    let arr = [7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3];
    let p = 0;
    let newnumb = 0;
    let oldnumb = 0;
    while (p <= arr.length - 1){
        newnumb = arr[p];
        if (newnumb < oldnumb){
            oldnumb = newnumb;
            p++;  
        }      
        p++;  
    }
    return oldnumb;
}
console.log("The lowest number within the array is " + min());

//Practice Task 3
function longest_string(){
    let string = "a";
    let string2 = string + "b";
    let string3 = string2 + "c";
    let string4 = string3 + "d";
    let string5 = string4 + "efghijklmnopqrstuvwxyz"
    let arr = [string, string2, string3, string4, string5];
    let p = 0;
    let newstring = 0;
    let oldstring = 0;
    while (p <= arr.length - 1){
        newstring = arr[p];
        newstring = newstring.length;
        if (newstring > oldstring){
            oldstring = newstring;
            p++;  
        }      
        p++;  
    }
    return oldstring;
}
console.log("The longest string has " + longest_string() + " characters.");

//Practice Task 4
function contains(){
    let arr = ["yes", "no", 6, 7, "r", -3, "noob", 12, "Happy", "Up", 23, 3.4, -4];
    let value = prompt("Give me a number or word, I'll tell you if the random array has it: ");
    let p = 0;
    let currentvalue = 0;
    while (p <= arr.length - 1){
        currentvalue = arr[p];
        if (currentvalue == value){
            return true;
        }      
        else if (currentvalue != value){
            p++;
        }
    }
    return false;
}
console.log(contains());

//Challenge Task 1


