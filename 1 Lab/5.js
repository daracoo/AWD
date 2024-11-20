'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (input) => {
    input = input.split(", "); 
    console.log(totalCost(Number(input[0]), Number(input[1]), Number(input[2])));
    rl.close();
});

// DO NOT CHANGE ABOVE THIS LINE!!!!
function totalCost(tipA, tipB, tipV) {
    return tipA * 50 + tipB * 30 + tipV * 20;
}
