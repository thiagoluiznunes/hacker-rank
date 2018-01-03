'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function isPositive(num) {
    if (num > 0) {
        return 'YES';
    } 
    else if (num == 0) {
        throw new Error('Zero Error');
    }
    else {
        throw new Error('Negative Error');
    }
}

rl.on('line', input => {
    let result = isPositive(parseInt(input.trim()));
    rl.output(`The result is: ${result}`);

    rl.close();
});