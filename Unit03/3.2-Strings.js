/**
 * 3.2 - Strings and Loops
 * Author: Grant Beaton
 * 
 * Lesson link:  go.brash.ca/3U-3.1-While-Loops
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Task 1
let str = prompt("Give me a word, it will be reversed: ");

function reverse(str){
    let length = str.length;
    let word = "";
    while (length != -1) {
        word = word + str.charAt(length);
        length --;
      }
      console.log(word);
}
reverse(str);

//Task 2
function dragons_and_goblins(letters){
    let goblins = 0;
    let dragons = 0;
    let letter = 0;
    while (letter < letters.length + 1) {
        if (letters.charCodeAt(letter) == 100){
            dragons += 1;
            letter ++;
        }
        else if (letters.charCodeAt(letter) == 103){
            goblins += 1;
            letter ++;
        }
        else{
            letter ++;
        }
    }
    console.log("Goblins: " + goblins + " Dragons: " + dragons);
}
dragons_and_goblins("gdsafssdadgyafudsagdsadhasdshgaasdh");

//Task 3
function add(str){
    let number = 0;
    let total = 0;
    while (number < str.length + 1) {
        number = Number(number);
        total += number;
        number ++;
        }
    return total;
    }
console.log(add("42581032445327902308"));