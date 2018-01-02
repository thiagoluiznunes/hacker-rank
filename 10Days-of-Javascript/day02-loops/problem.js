'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if ((s[i] == 'a') || (s[i] == 'e') || (s[i] == 'i') || (s[i] == 'o') || (s[i] == 'u')) {
            rl.output(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if ((s[i] != 'a') && (s[i] != 'e') && (s[i] != 'i') && (s[i] != 'o') && (s[i] != 'u')) {
            rl.output(s[i]);
        }
    }
}

rl.on('line', input => {
    vowelsAndConsonants(input);

    rl.close();
});