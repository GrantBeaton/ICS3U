const prompt = require('prompt-sync')();

function whoAreYou() {
    let name = prompt("What's your name? ");

    let age = prompt("How old are you? ");
    age = parseInt(age);
    age = Number(age);

    let hobby = prompt("What's your favourite thing to do? ");
    
    console.log("Hello, " + name + ", you are " + age + " years old and your favourite hobby is " + hobby + "!");
}
whoAreYou()

function tax_calculator(dollars){
    let sum = prompt("How much money are you being taxed on? ");
    sum = parseInt(sum);
    sum = Number(sum);

    let tax = (sum*0.13);
    console.log("You are taxed for " + tax + " dollars ")
}
tax_calculator()

function calculator(operator){

    let num1 = prompt("Give me a random number. ");
    num1 = Math.round(num1);
    num1 = Number(num1);

    let num2 = prompt("Give me a second random number. ");
    num2 = Math.round(num2);
    num2 = Number(num2);

    let add = (num1 + num2);
    add = Math.round(add);
    console.log("If you added the numbers together, you get " + add + ".");

    let sub = (num1 - num2);
    add = Math.round(sub);
    console.log("If you subtracted the second number from the first, you get " + sub + ".");

    let multi = (num1*num2);
    multi = Math.round(multi);
    console.log("If you multiplied the numbers together, you get " + multi + ".");

    let div = (num1/num2);
    console.log("If you divided the first number by the second, you get " + div + ".");
}
calculator()

function pythagorean(legA, legB, Hypoteneuse){

    let sideA = prompt("What's the side length of a? ");
    sideA = parseInt(sideA);
    sideA = Number(sideA);
    
    let sideB = prompt("What the side length of b? ");
    sideB = parseInt(sideB);
    sideB = Number(sideB);

    let hypo = Math.sqrt(((sideA*sideA) + (sideB*sideB)));
    hypo = Math.round(((hypo)*10)/10)
    console.log("The length of the hypoteneuse is " + hypo + ".");
}
pythagorean()
