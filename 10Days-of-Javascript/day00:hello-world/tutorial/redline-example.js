'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('\n What do you think about of Node.js? ', (answer) => {
    rl.output.write(`\nThank you for your valuable feedback: ${answer} \n\n`);

    rl.close();
});
