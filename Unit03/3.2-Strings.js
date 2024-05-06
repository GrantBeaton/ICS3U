/**
 * 3.2 - Strings and Loops
 * Author: Grant Beaton
 * 
 * Lesson link:  go.brash.ca/3U-3.1-While-Loops
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
    let number = 0;//Sets these values as 0
    let total = 0;
    while (number < str.length + 1) {//While the current number is more than the length + 1, it runs
        number = Number(number);//Sets number
        total += number;//Adds number to the total
        number ++;//Adds one to number to not go infinitely
        }
    return total;
    }
console.log(add("54327890208990"));//Calls the function with the numbers

//Task 4
function add_subtract(str){
    let number = 0;//Sets these values as 0
    let total = 0;
    while (number < str.length + 1) {
        if (number == "-"){//Figures out if its a 0
            number++;
            number = Number(number);
            total = total - number;//Subtracts the next number
        }
        number = Number(number);
        total += number;//Regular adding of numbers
        number ++;//Don't make an infinite loop
        }
        return total;//Returns
    }
console.log(add_subtract("53289-4389-32895-54-7483"));//Calls the function with teh numbers
