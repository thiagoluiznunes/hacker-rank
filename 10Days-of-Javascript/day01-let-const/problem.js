'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

const PI = Math.PI;

rl.output('\nType it radius value:');

rl.on('line', input => {
    let radius = parseFloat(input);

    rl.output(`Circle area: ${PI * (radius * radius)}`);
    rl.output(`Cicler parameter: ${2 * PI * radius}`);
    rl.output();

    rl.close();
});
