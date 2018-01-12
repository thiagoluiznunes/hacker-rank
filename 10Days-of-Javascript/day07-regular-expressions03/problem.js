'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function regexVar() {
    // 'g' means that will match all occurrences
    const re = new RegExp('[0-9]+', 'g');

    return re;
}

rl.on('line', input => {
    const regex = regexVar();
    console.log(input.match(regex));

    rl.close();
});