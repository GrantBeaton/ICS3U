/**
 * 3.5 - Nested Loops
 * Author: Grant Beaton
 * 
 **/


'use strict'; 
const prompt = require('prompt-sync')();

//Task 1
function print_line(){
    console.log("\nEmoji selection menu  \n1. 🙀  \n2. 🛟  \n3. 👑  \n4. 😎  \n5. ❤️");
    let whichone = Number(prompt("Enter the number of the emoji that you want: "));
    let thisone = "";
        if (whichone == 1){
            thisone = "🙀";
        }
        else if (whichone == 2){
            thisone = "🛟";
        }
        else if (whichone == 3){
            thisone = "👑";
        }
        else if (whichone == 4){
            thisone = "😎";
        }
        else if (whichone == 5){
            thisone = "❤️";
        }
        else{
            console.log("Alright, you don't get any emojis then. ");
        }
    let howmany = Number(prompt("How many emojis do you want? "));
    let emoji = "";
    let emoji2 = "";
    while (howmany > 0){
        emoji += thisone;
        howmany -= 1;
    }
    console.log(emoji);
    let trytwo = Number(prompt("How many emojis do you want (again): "));
    
    do{
        while (trytwo > 0){
            emoji2 += thisone;
            trytwo -= 1;
        }
        console.log(emoji2);
    }
    while (trytwo < 0);
}
print_line();

//Task 2
function print_square(){
    console.log("\nEmoji selection menu  \n1. 🙀  \n2. 🛟  \n3. 👑  \n4. 😎  \n5. ❤️");
    let whichone = Number(prompt("Enter the number of the emoji that you want: "));
    let thisone = "";
        if (whichone == 1){
            thisone = "⚔️";
        }
        else if (whichone == 2){
            thisone = "🫏";
        }
        else if (whichone == 3){
            thisone = "🤮";
        }
        else if (whichone == 4){
            thisone = "💩";
        }
        else if (whichone == 5){
            thisone = "🦥";
        }
        else{
            console.log("Alright, you don't get any emojis then. ");
        }
    let howmany = Number(prompt("How wide do you want your square to be? "));
    let oghowmany = howmany;
    let emoji = "";
    let emoji2 = "";
    while (howmany > 0){
        emoji += thisone;
        howmany -= 1;
    }
    while (oghowmany > 0){
        console.log(emoji);
        oghowmany -= 1;
    }
    
    let trytwo = Number(prompt("How wide do you want your square to be (again)? "));
    let ogtrytwo = trytwo;
    do{
        while (trytwo > 0){
            emoji2 += thisone;
            trytwo -= 1;
        }
        while (ogtrytwo > 0){
            console.log(emoji2);
            ogtrytwo -= 1;
        }
    }
    while (trytwo < 0);
}
print_square()

//Bonus Task 1

//Bonus Task 2
function print_diamond(){
    console.log("\nEmoji selection menu  \n1. 🙀  \n2. 🛟  \n3. 👑  \n4. 😎  \n5. ❤️");
    let whichone = Number(prompt("Enter the number of the emoji that you want: "));
    let thisone = "";
        if (whichone == 1){
            thisone = "🤑";
        }
        else if (whichone == 2){
            thisone = "😜";
        }
        else if (whichone == 3){
            thisone = "😭";
        }
        else if (whichone == 4){
            thisone = "🤯";
        }
        else if (whichone == 5){
            thisone = "🤬";
        }
        else{
            console.log("Alright, you don't get any emojis then. ");
        }
    let howmany = Number(prompt("How wide do you want your diamond to be? "));
    let emojicount = 1;
    let emoji = "";
    let emoji2 = "";
        while (emojicount < (howmany + 1)){
            emoji += thisone;
            emojicount += 1;
            console.log(emoji);
        }
        while (emojicount > 0){
            emoji -= thisone;
            emojicount -= 1;
            console.log(emoji);
        }
    howmany = Number(prompt("How wide do you want your diamond to be (again)? "));
    do{
        while (emojicount < (howmany + 1)){
            emoji2 += thisone;
            emojicount += 1;
            console.log(emoji2);
        }
        while (emojicount > 0){
            emoji2 -= thisone;
            emojicount -= 1;
            console.log(emoji2);
        }
    }
    while (howmany < 0)

}
print_diamond()


