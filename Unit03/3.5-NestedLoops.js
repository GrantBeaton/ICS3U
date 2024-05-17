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
    let whichone = Number(prompt("Enter the number of the emoji that you want: ")); //Asks the user which emoji they want
    let thisone = "";
        if (whichone == 1){//Determines the emoji that they want
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
            console.log("Alright, you don't get any emojis then. ");//Stops the number from being outside of the 1-5 range
        }
        let go = 0;
    while (go < 2){//Sets go so that the while loop doesn't go infinitely
        let howmany = 0;
        let emoji = "";
        howmany = Number(prompt("How many emojis do you want? "));//Asks the user how many emojis they want
    while (howmany > 0){
        emoji += thisone;//Adds one emoji of their choice to the line
        howmany -= 1;//Takes one away so the while loop shrinks
    }
    console.log(emoji);//Prints their line of emojis
    go ++;//Makes the while loop run twice
}
}
print_line();

//Task 2
function print_square(){
    console.log("\nEmoji selection menu  \n1. ⚔️  \n2. 🫏  \n3. 🤮  \n4. 💩  \n5. 🦥");
    let whichone = Number(prompt("Enter the number of the emoji that you want: ")); //Asks the user which emoji they want
    let thisone = "";
        if (whichone == 1){//Determines which emoji they want
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
            console.log("Alright, you don't get any emojis then. ");//Stops the input from being outside of the 1-5 range
        }
        let go = 0;
    while (go < 2){//Makes the while loop run twice
        let howmany = 0;
        let emoji = "";
        howmany = Number(prompt("How wide do you want your square to be? "));//Asks how wide they want their square to be
        let oghowmany = howmany;//Stores that value
        while (howmany > 0){
            emoji += thisone;//Adds the emoji they want to the line
            howmany -= 1;//Makes the while loop shrink
    }
        while (oghowmany > 0){
            console.log(emoji);//Prints the line 
            oghowmany -= 1;//Uses the original value to print it as many times as their width
    }
    go ++;//Makes it run twice
}
}
print_square()

//Bonus Task 1
function print_outline(){
    console.log("\nEmoji selection menu  \n1. ⚔️  \n2. 🫏  \n3. 🤮  \n4. 💩  \n5. 🦥");
    let whichone = Number(prompt("Enter the number of the emoji that you want: "));//Asks the user which emoji they want
    let thisone = "";
        if (whichone == 1){//Determines the emoji that they want
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
            console.log("Alright, you don't get any emojis then. ");//Keeps the input within the 1-5 range
        }
    let whichone2 = Number(prompt("Enter the number of the second emoji that you want: "));//Gets a second emoji from the user
    let thisone2 = "";
        if (whichone2 == 1){//Determines the second emoji they want
            thisone2 = "🫠";
        }
        else if (whichone2 == 2){
            thisone2 = "😎";
        }
        else if (whichone2 == 3){
            thisone2 = "🤮";
        }
        else if (whichone2 == 4){
            thisone2 = "💩";
        }
        else if (whichone2 == 5){
            thisone2 = "🦥";
        }
        else{
            console.log("Alright, you don't get any emojis then. ");//Keeps the emoji within the 1-5 range
        }
    
        let go = 0;
    while (go < 2){//Makes the while loop run twice
        let howmany = 0;
        let emoji = "";
        let emoji2 = "";
        howmany = Number(prompt("How wide do you want your outline to be? "));//Asks how wide their outline should be
        let oghowmany = howmany - 2;
        let truehowmany = howmany - 2;
        while (howmany > 0){
            emoji += thisone;//Creates the first line, same as the original line code
            howmany -= 1;
    }
    console.log(emoji);//Prints it
    emoji2 = thisone;//Adds the first emoji once
        while (oghowmany > 0){
            emoji2 += thisone2//Does the while loop, adding the second emoji after the one original emoji, leaves one space afterwards
            oghowmany -= 1;//Shrinks the while loop
    }
    emoji2 += thisone;//Adds the first emoji onto 

    while (truehowmany > 0){
        console.log(emoji2)//Like the square code, prints the previous line of emoijs 2 times less than the width
        truehowmany -= 1;//Shrinks the while loop
    }
    console.log(emoji);//Prints the original line of just the first emoji
    go ++;
}
}
print_outline()

//Bonus Task 2
function print_diamond(){
    console.log("\nEmoji selection menu  \n1. 🤑  \n2. 😜  \n3. 😭  \n4. 🤯  \n5. 🤬");
    let whichone = Number(prompt("Enter the number of the emoji that you want: ")); //Asks the user which emoji they want
    let thisone = "";
        if (whichone == 1){ //Determines which emoji they want
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
            console.log("Alright, you don't get any emojis then. "); //Stops the input from being outside of the 1-5 range
        }
        let go = 0;
while(go < 2){//Makes the while loop run twice
    let howmany = Number(prompt("How wide do you want your diamond to be? ")); //Asks how wide they want their diamond to be
    let space = " "; //Sets some placeholder values
    let emoji = 1;
    let emojicount;

while(emoji <= howmany) {
  emojicount = (howmany - emoji)/2;//Makes emojicount equal the total asked amount minus the current value of emoji, divided by two
  console.log(space.repeat(emojicount) + thisone.repeat(emoji));//Prints enough spaces to match the value of emojicount, and then prints emojis equal to the value of emoji
  emoji ++;//Stops it from begin an infinite while loop
}

while(emoji >= 2) {
  emoji --;//Stops it from being infinite, also starts at the top so it doesn't print the same value twice
  emojicount = (howmany - emoji)/2;//Does the same thing with emoji count
  if(emoji < howmany) {//If the amount of emojis is less than the inputted value, it runs            
    console.log(space.repeat(emojicount) + thisone.repeat(emoji));//Prints the same way as before
  } 
}
go++;//Makes it run twice
}
}
print_diamond();