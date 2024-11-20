'use strict'

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
function extender(p1, p2) {
    const result = { ...p1 };

    for (const key in p2) {
        if (!(key in result)) {
            result[key] = p2[key];
        }
    }
    
    return result;
}
rl.question('', (p1) => {
  rl.question('', (p2) => {
   
    p1 = JSON.parse(p1)
    p2 = JSON.parse(p2)
    
    extender(p1, p2)
    console.log(extender(p1,p2))
    //console.log(p1)

    rl.close();
  })
});


