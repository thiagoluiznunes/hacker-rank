'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function getSecondLargest(nums) {
    let larger = 0;
    let secondLarger = 0;

    for (let i = 0; i < nums.length; i++) {
        let number = parseInt(nums[i]);
        if (number > larger) {
            secondLarger = larger;
            larger = number;
        }
        if ((number < larger) && (number > secondLarger)) {
            secondLarger = number;
        }
    }
    return secondLarger;
}

rl.on('line', input => {
    let nums = input.trim().split(' ').map(string => string.trim());
    let result = getSecondLargest(nums);
    rl.output(result);

    rl.close();
});