/**
 * 3.4 - For Loops
 * Author: Grant Beaton
 * 
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Task 1
function print_line(){
    let howmany = Number(prompt("How many emojis do you want? "));
    let emoji = "";
    while (howmany > 0){
        emoji = emoji + "🙀";
        howmany -= 1;
    }
    console.log(emoji);
}
print_line();