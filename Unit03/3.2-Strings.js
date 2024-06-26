/**
 * 3.2 - Strings and Loops
 * Author: Grant Beaton
 * 
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Task 1
let str = prompt("Give me a word, it will be reversed: ");//Gets a user inputted word

function reverse(str){
    let length = str.length;
    let word = "";
    while (length != -1) {//If the length is 0 or more, it runs
        word = word + str.charAt(length);//Adds the current character
        length --;//Makes length one less
      }
      console.log(word);//Prints the reversed word
}
reverse(str);//Calls the function

//Task 2
function dragons_and_goblins(letters){
    let goblins = 0;//Sets the values as 0 for now
    let dragons = 0;
    let letter = 0;
    while (letter < letters.length + 1) {//If the current letter is less than the length + 1, it runs
        if (letters.charCodeAt(letter) == 100){//Finds if it's a d
            dragons += 1;//Adds one to dragon
            letter ++;//Adds one to letter
        }
        else if (letters.charCodeAt(letter) == 103){//Same things but with a g
            goblins += 1;
            letter ++;
        }
        else{//If it is neither, continues
            letter ++;
        }
    }
    console.log("Goblins: " + goblins + " Dragons: " + dragons);//Prints the score
}
dragons_and_goblins("gdsafssdadgyafudsagdsadhasdshgaasdh");//Calls the function with teh numbers

//Task 3
function add(str){
    let total = 0;
    for (let n = 0; n < str.length; n++) {
        if (str[n] != "-"){
            total += parseInt(str[n]);//Regular adding of numbers
    }
    }
    return total;
    }
console.log(add(prompt("Give me a string of random numbers: ")));//Calls the function with the numbers

//Task 4
function add_subtract(str2){
    let total2 = 0;
    for (let n = 0; n < str2.length; n++) {
        if (str2[n] != "-"){
            total2 += parseInt(str2[n]);//Regular adding of numbers
    }
        else if (str2[n] == "-"){//Figures out if its a -
            n++;
            total2 -= parseInt(str2[n]);//Subtracts the next number
        }
    }
    return total2;
}   
console.log(add_subtract(prompt("Give me a string of random numbers with dashes throughout: ")));//Calls the function with the numbers
