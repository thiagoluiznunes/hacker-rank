'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function modifyArray(nums) {
    let result = nums;

    for (let i in result) {
        if ((result[i] % 2) == 0) {
            result[i] *= 2;
        } else {
            result[i] *= 3;
        }
    }
    return result;
}

rl.on('line', input => {
    let arr = input.trim().split(' ').map(s => parseInt(s));
    console.log('New array: ', modifyArray(arr));

    rl.close();
});
