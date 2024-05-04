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
        length = length - 1;
      }
      console.log(word);
}
reverse(str);

//Task 2
let letters = "gdsafssdadgyafudsagdsadhasdshgaasdh";
function dragons_and_goblins(letters){
    let goblins = 0;
    let dragons = 0;
    


}
dragons_and_goblins(letters);