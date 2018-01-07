'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function getMaxLessThanK(n, k) {
    let largest = 0;
    let current = 0;
    for (let i = 1; i < n; i++) {
        for (let x = i + 1; x <= n; x++) {
            current = i & x;
            if (current < k && current < n && current > largest) {
                largest = current;
            }
        }
    }
    return largest;
}

rl.on('line', input => {
    let arr = input.trim().split(' ').map(s => parseInt(s));
    console.log('Maximum: ' ,getMaxLessThanK(519, 177));

    rl.close();
});
