'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return this.w * this.h;
};

class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log('Rectangle area: ', rec.area());
console.log('Square area: ', sqr.area());

rl.close();