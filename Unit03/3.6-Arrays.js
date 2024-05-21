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
    while (p <= arr.length - 1){//Creates a while loop that goes until p is above the length of the array
    console.log(arr[p]);//Prints the current value of the array
    p++;//Adds to p to not make it infinite
    }
}
print_array([56, 34, -99, "Hello", true, "Good bye", 0, -1, 42]);//Calls the function with the array

//Practice Task 2
function min(arr){
    let p = 0;
    let newnumb = 0;
    let oldnumb = 0;
    while (p <= arr.length - 1){//Does the same while loop
        newnumb = arr[p];//Sets newnumb as the current value of the array
        if (newnumb < oldnumb){//Checks if newnumb is greater than the currrent greatest number
            oldnumb = newnumb;//Sets the value of oldnumb as newnumb
            p++;  
        }      
        p++;//Doesn't make an infinite loop
    }
    return oldnumb;
}
console.log("The lowest number within the array is " + min([7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3]));//Prints the sentence while calling the value

//Practice Task 3
    let string = "a";//Created some of my own strings
    let string2 = string + "b";
    let string3 = string2 + "c";
    let string4 = string3 + "d";
    let string5 = string4 + "efghijklmnopqrstuvwxyz"

function longest_string(arr){
    let p = 0;
    let newstring = 0;
    let oldstring = 0;
    while (p <= arr.length - 1){//Same while loop
        newstring = arr[p];//Makes newstring the current value of the array
        newstring = newstring.length;//Makes newstring it's own length
        if (newstring > oldstring){//Checks if newstring is the longest strength
            oldstring = newstring;
            p++;  
        }      
        p++;//Doesn't make an infinite loop
    }
    return oldstring;
}
console.log("The longest string has " + longest_string([string, string2, string3, string4, string5]) + " characters.");//Prints the sentence while calling the value

//Practice Task 4
function contains(arr){
    let value = prompt("Give me a number or word, I'll tell you if the random array has it: ");//Asks the user for a value
    let p = 0;
    let currentvalue = 0;
    while (p <= arr.length - 1){//Same while loop
        currentvalue = arr[p];//Sets currentvalue to the current value of the array
        if (currentvalue == value){//Checks if currentvalue is the same as the input
            return true;//Returns true
        }      
        else if (currentvalue != value){//If not, keeps going, no infinte loop
            p++;
        }
    }
    return false;//If none of them matched, returns false
}
console.log(contains(["yes", "no", 6, 7, "r", -3, "noob", 12, "Happy", "Up", 23, 3.4, -4]));//Prints true or false while calling the value

//Challenge Task 1
function min_max(arr){
    let p = 0;
    let newnumb = 0;
    let smallnumb = 0;
    let bignumb = 0;
    while (p <= arr.length - 1){//Same while loop
        newnumb = arr[p];//Makes newnumb the current value of teh array
        if (newnumb < smallnumb){//Checks if it's the smallest number
            smallnumb = newnumb;
            p++;  
        }      
        else if (newnumb > bignumb){//Checks if it's the biggest number
            bignumb = newnumb;
            p++;
        }
        p++;
}
console.log("The smallest numbers in the array is: " + smallnumb + ", and the biggest number is: " + bignumb);//Prints the big and small numbers in a sentence 
}
min_max([7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3]);//Calls the values for the function

//Challenge Task 2
function sum(arr){
    let p = 0;
    let newnumb = 0;
    let total = 0;
    while (p <= arr.length - 1){//Same while loop 
        newnumb = arr[p];//Makes newnumb equal the current value of the array
        if (isNaN(newnumb)){//Checks if newnumb is a number, doesn't run if it's not
        }
        else {//Adds the number onto the total
            total += Number(newnumb);
        }     
        p++;
}
return total - 1;//Returns the total
}
console.log("The total of all of the numbers is: " + sum(["yes", "no", 6, 7, "r", -3, "noob", 12, "Happy", true, "Up", 23, 3.4, -4]));//Prints the sum in a sentence while calling the value

//Challenge Task 3
function reverse_strings(arr){
    let revarr = [];//Sets revarr as an empty array
    for (let p = 0; p <= arr.length - 1; p++){//For loop, same thing as the past while loop, checks the current word in the array
        let revword = "";//Resets revword each time
        for (let word = arr[p].length - 1; word >= 0; word--){//Another foor loop, checks the current letter in teh word
            revword += arr[p][word];//Adds the letter to revword
        }
        revarr.push(revword);//Pushes its value to revarr
        console.log(revword);//Prints the reversed array, then restarts
    }
    return revarr;
}
console.log(reverse_strings(["Hello", "Goodbye", "Coding is fun!", "Strings are easy.", "zzzzzzz"]));//Prints the returned revarr and calls the value