'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const firstInteger = 4;
const firstDecimal = 4.0;
const firstString = 'HackerRank ';

rl.on('line', input => {
    const array = input.split(' ');
    
    const secondInteger = parseInt(array[0]);
    const secondDecimal = parseFloat(array[1]);
    const secondString = array[2];
    
    console.log(`\n${secondInteger} ${typeof secondInteger}`);
    console.log(`${secondDecimal} ${typeof secondDecimal}`);
    console.log(`${secondString} ${typeof secondString}\n`);

    console.log(`Sum: ${firstInteger + secondInteger}`);
    console.log(`Sum: ${firstDecimal + secondDecimal}`);
    console.log(`Sum: ${firstString + secondString}\n`);
    
    rl.close();
});