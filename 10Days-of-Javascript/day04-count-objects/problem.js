'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function getCount(arr) {
    let count = 0;
    for (let i in arr) {
        if (arr[i].x == arr[i].y) {
            count++;    
        }
    }
    return count;
}

function Obj(x, y) {
    this.x = x;
    this.y = y;
}

rl.on('line', input => {
    let arr = input.trim().split(' ').map(s => parseInt(s));
    let objects = [];

    for (let i = 0; i < arr.length; i++) {
        objects.push(new Obj(arr[i], arr[i+1]));
        i++;
    }
    console.log(getCount(objects));

    rl.close();
});