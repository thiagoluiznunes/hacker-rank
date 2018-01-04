'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
    this.perimeter = 2 * (length + width);
    this.area = length * width;
}

rl.on('line', input => {
    let arr = input.trim().split(' ').map(string => parseInt(string));
    let rec = new Rectangle(arr[0], arr[1]);

    console.log('Length: ', rec.length);
    console.log('Width: ', rec['width']);
    console.log('Perimeter: ', rec.perimeter);
    console.log('Area: ', rec['area']);

    rl.close();
});