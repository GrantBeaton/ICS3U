const prompt = require('prompt-sync')();

//Is it the weekend
console.log("Is it the weekend?")
let day = prompt("Give me the current day of the week if Sunday is 1 and Saturday is 7. ");
day = Number(day);


function is_it_the_weekend(day){
    if ((day == 1) || (day == 7)){
        return true;
}
    else {
        return false;
    }
}

console.log(is_it_the_weekend(day))

//Even number divisible by nine
console.log("Is it an even number divisible by nine?")
let value = prompt("Give me a random number. ");
value = Number(value);

function evNineIble(value){
    if ((value %9 == 0) && (value %2 == 0)){
        return true;
    }
    else{
        return false;
    }
}

console.log(evNineIble(value));

//Surface Area of a Cylinder
console.log("Finding the area of a cylinder?")
let radius = prompt("What's the radius of the circle? ");
radius = Number(radius);
let area = (Math.PI*(radius*radius));
area = Number(area);
area = Math.round(area);

function area_circle(r){
   return area;
}
console.log("The area of the circle is: ")
console.log(area_circle(area));

let r = prompt("What's the radius of the cylinder? ");
let h = prompt("What's the height of the cylinder? ");
let arealabel = (2*(Math.PI*(r*h)));
arealabel = Number(arealabel);
arealabel = Math.round(arealabel);

function area_label(r,h){
    return arealabel;
}
console.log("The area of the label is: ")
console.log(area_label(arealabel));

let areacyl = (area + arealabel);
areacyl = Number(areacyl);
areacyl = Math.round(areacyl);

function area_cylinder(r,h){
    return areacyl;
}
console.log("The area of the cylinder is: ")
console.log(area_cylinder(areacyl));

//Creepy Ghosts
let random_number = Math.random() * 20;    
random_number = Math.floor(random_number);

console.log(random_number);
if (random_number%2 == 0){
    let polter = "1";
    polter = Number(polter);
}
else if (random_number % 3 == 0){
    let polter = "2";
    polter = Number(polter);
}
else{
    let polter = "3";
    polter = Number(polter);
}
console.log(polter);

let random_number2 = Math.random() * 20;    
random_number2 = Math.floor(random_number2);

if (random_number2 % 2 == 0){
    let wolter = 1;
    wolter = Number(wolter);
}
else if (random_number2 % 3 == 0){
    let wolter = 2;
    wolter = Number(wolter);
}
else{
    let wolter = 3;
    wolter = Number(wolter);
}
console.log(wolter);
