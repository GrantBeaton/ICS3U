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
        let go = 0;
    while (go < 2){
        let howmany = 0;
        let emoji = "";
        howmany = Number(prompt("How many emojis do you want? "));
    while (howmany > 0){
        emoji += thisone;
        howmany -= 1;
    }
    console.log(emoji);
    go ++;
}
}
print_line();

//Task 2
function print_square(){
    console.log("\nEmoji selection menu  \n1. ⚔️  \n2. 🫏  \n3. 🤮  \n4. 💩  \n5. 🦥");
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
        let go = 0;
    while (go < 2){
        let howmany = 0;
        let emoji = "";
        howmany = Number(prompt("How wide do you want your square to be? "));
        let oghowmany = howmany;
        while (howmany > 0){
            emoji += thisone;
            howmany -= 1;
    }
        while (oghowmany > 0){
            console.log(emoji);
            oghowmany -= 1;
    }
    go ++;
}
}
print_square()

//Bonus Task 1
function print_outline(){
    console.log("\nEmoji selection menu  \n1. ⚔️  \n2. 🫏  \n3. 🤮  \n4. 💩  \n5. 🦥");
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
    let whichone2 = Number(prompt("Enter the number of the second emoji that you want: "));
    let thisone2 = "";
        if (whichone2 == 1){
            thisone2 = "⚔️";
        }
        else if (whichone2 == 2){
            thisone2 = "🫏";
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
            console.log("Alright, you don't get any emojis then. ");
        }
    
        let go = 0;
    while (go < 2){
        let howmany = 0;
        let emoji = "";
        let emoji2 = "";
        howmany = Number(prompt("How wide do you want your outline to be? "));
        let oghowmany = howmany - 2;
        let truehowmany = howmany - 2;
        while (howmany > 0){
            emoji += thisone;
            howmany -= 1;
    }
    console.log(emoji);
    emoji2 = thisone;
        while (oghowmany > 0){
            emoji2 += thisone2
            oghowmany -= 1;
    }
    emoji2 += thisone;

    while (truehowmany > 0){
        console.log(emoji2)
        truehowmany -= 1;
    }
    console.log(emoji);
    go ++;
}
}
print_outline()

//Bonus Task 2
function print_diamond(){
    console.log("\nEmoji selection menu  \n1. 🤑  \n2. 😜  \n3. 😭  \n4. 🤯  \n5. 🤬");
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
        }
    }
    while (howmany < 0)

}
print_diamond()