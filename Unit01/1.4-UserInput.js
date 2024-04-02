const prompt = require('prompt-sync')();

console.log("1.4 - User Input");
let year = prompt("What year were you born? ");
console.log("You entered ", + year );
let age = 2024 - year;
console.log("You are likely",age, "years old");
let name = prompt("What is your name? ");
console.log("Hi,",name, "you were born in",year, "and you are likely",age, "years old.");
let x = name.length
console.log("your name is" + x + "letters long.");

let far = prompt("What is the temperature in Fahrenheit? ");
console.log("You said the temperature is", far, "degrees Fahrenheit."); 
console.log("The temperature in Celsius is", (far-32)*5/9, "degrees"); 


