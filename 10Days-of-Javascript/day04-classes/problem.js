'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

class Polygon {
    constructor(arr) {
        this.array = arr;
    }
    perimeter() {
        return this.array.reduce((previous, current, index, array) => previous + current);
    }
}
rl.on('line', input => {
    let pol = new Polygon(input.trim().split(' ').map(s => parseInt(s)));
    console.log(pol.perimeter());

    rl.close();
});
