'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', input => {
    rl.output.write('\nHello, wolrd\n');
    rl.output.write(`${input}\n\n`);
    rl.close();
});
