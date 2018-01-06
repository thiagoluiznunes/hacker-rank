'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function getMaxLessThanK(n, k) {
    let arr = Array(n).fill(0).map((s, i) => s+i+1);

    for (let i = 0; i < arr.length; i++) {
        for (let x = i+1; x < arr.length; x++) {
            console.log(arr[i], arr[x]);
        }
    }
}

rl.on('line', input => {
    let arr = input.trim().split(' ').map(s => parseInt(s));
    getMaxLessThanK(4, 2);

    rl.close();
});
