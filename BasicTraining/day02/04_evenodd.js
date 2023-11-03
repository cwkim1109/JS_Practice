const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    let result = '';

    if (n%2 === 0) {
        result = `${n} is even`;
    } else {
        result = `${n} is odd`;
    }

    console.log(result);
});