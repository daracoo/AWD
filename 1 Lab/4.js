'use strict'

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.question('', (p1) => {
  rl.question('', (p2) => {
    p1 = p1.split(", ")
    p2 = p2.split(", ")
   
    console.log(merge(p1,p2))

    rl.close();
  })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

const merge = function(p1, p2){
    const array = [];
    for(let i=0; i<p1.length;i++){
        array.push([p1[i], p2[i]]);
    }
    return array;
} // Write this function
