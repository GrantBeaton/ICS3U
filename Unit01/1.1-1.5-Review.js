const prompt = require('prompt-sync')();

let temp = prompt("Enter a temperature like 30C or 120F. ");

let TEMP = temp.toUpperCase();

let type = TEMP[TEMP.length-1];

realtemp = parseInt(TEMP);

if (type == "C"){
    far = (realtemp*(9/5) + 32);
    realfar = Math.round(far*10)/10;
    console.log(realfar + "F");
}
else if (type == "F"){
    cel = (realtemp-32)*5/9;
    realcel = Math.round(cel*10)/10;
    console.log(realcel + "C");
}

