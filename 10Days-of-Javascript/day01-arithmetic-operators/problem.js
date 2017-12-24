'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function getArea(length, width) {
    let area;
    area = length * width;

    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width);

    return perimeter;
}

let length;
let width;
let count = 0;

rl.output('Type it area length');

rl.on('line', input => {
    if (count == 0) {
        length = parseInt(input);
        rl.output('Type it area width');
        count++;
    } else {
        width = parseInt(input);
        rl.output(`Area: ${getArea(length, width)}`);
        rl.output(`Perimeter: ${getPerimeter(length, width)}`);
        rl.output()

        rl.close();
    }
});
