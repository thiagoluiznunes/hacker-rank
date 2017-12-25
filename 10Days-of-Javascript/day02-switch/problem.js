'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function getLetter(s) {
    let result;
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            result = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
            result = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            result = 'C';
            break;
        default:
            result = 'D';
            break;
    }
    return result;
}

rl.on('line', input => {
    let result = getLetter(input);
    rl.output(result);
    rl.output();

    rl.close();
});