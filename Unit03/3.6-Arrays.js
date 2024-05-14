/**
 * 3.6 - Arrays
 * Author: Grant Beaton
 * 
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Practice Task 1
function print_array(arr){
    let p = 0;
    while (p <= arr.length - 1){
    console.log(arr[p]);
    p++;
    }
}
print_array([56, 34, -99, "Hello", true, "Good bye", 0, -1, 42]);

//Practice Task 2
function min(arr){
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
console.log("The lowest number within the array is " + min([7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3]));

//Practice Task 3
    let string = "a";
    let string2 = string + "b";
    let string3 = string2 + "c";
    let string4 = string3 + "d";
    let string5 = string4 + "efghijklmnopqrstuvwxyz"

function longest_string(arr){
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
console.log("The longest string has " + longest_string([string, string2, string3, string4, string5]) + " characters.");

//Practice Task 4
function contains(arr){
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
console.log(contains(["yes", "no", 6, 7, "r", -3, "noob", 12, "Happy", "Up", 23, 3.4, -4]));

//Challenge Task 1
function min_max(arr){
    let p = 0;
    let newnumb = 0;
    let smallnumb = 0;
    let bignumb = 0;
    while (p <= arr.length - 1){
        newnumb = arr[p];
        if (newnumb < smallnumb){
            smallnumb = newnumb;
            p++;  
        }      
        else if (newnumb > bignumb){
            bignumb = newnumb;
            p++;
        }
        p++;
}
console.log("The smallest numbers in the array is: " + smallnumb + ", and the biggest number is: " + bignumb);
}
min_max([7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3]);

//Challenge Task 2
function sum(arr){
    let p = 0;
    let newnumb = 0;
    let total = 0;
    while (p <= arr.length - 1){
        newnumb = arr[p]; 
        if (isNaN(newnumb)){
        }
        else {
            total += Number(newnumb);
        }     
        p++;
}
return total;
}
console.log("The total of all of the numbers is: " + sum(["yes", "no", 6, 7, "r", -3, "noob", 12, "Happy", true, "Up", 23, 3.4, -4]));

//Challenge Task 3
function reverse_strings(arr){
    let p = 0;
    let longness = arr.length;
    while (p <= arr.length - 1) {//If the length is 0 or more, it runs
        let revarr = "";
        arr = arr[p];
        while (longness >= 0){
            revarr += arr[longness];
            longness--;
        }
        p++;
        console.log(revarr);//Prints the reversed word
        longness = arr.length
    }
}
reverse_strings(["Hello", "Goodbye", "Coding is fun!", "Strings are easy.", "zzzzzzz"]);