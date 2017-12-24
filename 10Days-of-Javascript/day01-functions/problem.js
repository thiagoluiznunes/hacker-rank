'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function factorial(number) {
    if (number > 1) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }
}

rl.output('\nType it the value:');

rl.on('line', input => {
    const result = factorial(parseInt(input));
    rl.output(`Factorial of ${input} is ${result}`);
    rl.output();

    rl.close();
});