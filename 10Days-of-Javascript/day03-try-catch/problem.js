'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        console.log(`Type: ${typeof s}`);
        console.log(s);
    }
}

rl.on('line', input => {
    reverseString(input);

    rl.close();
});