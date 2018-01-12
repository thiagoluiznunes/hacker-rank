'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function regexVar() {
    const re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)\\.[a-zA-z]+$');

    return re;
}

rl.on('line', input => {
    const regex = regexVar();
    console.log(regex.test(input));

    rl.close();
});