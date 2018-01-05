'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function sides(strings, ...values) {
    let arr = [];
    let A = values[0];
    let P = values[1];

    let s1 = (P + Math.sqrt((P * P) - 16 * A)) / 4;
    let s2 = (P - Math.sqrt((P * P) - 16 * A)) / 4;

    arr.push(s1);
    arr.push(s2);
    arr.sort();

    return arr;
}

rl.on('line', input => {
    const s = input.trim().split(' ').map(x => parseInt(x)).sort();

    const [x, y] = sides`The area is: ${s[0] * s[1]}.
                         The perimeter is: ${2 * (s[0] + s[1])}.`

    console.log('Value: ', (s[0] == x) ? s[0] : -1);
    console.log('Value: ', (s[1] == y) ? s[1] : -1);

    rl.close();
});

