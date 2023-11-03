const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let strLast = ''

    for(let i of str) {
        if(i === i.toUpperCase()) {
            i = i.toLowerCase();
        } else if (i === i.toLowerCase()) {
            i = i.toUpperCase();
        }
        strLast += i;
    }
    console.log(strLast+'\n');
});