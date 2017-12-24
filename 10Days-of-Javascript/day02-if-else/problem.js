'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function getGrade(score) {
    let grade = parseInt(score);

    if ((grade > 25) && (grade <= 30)) {
        return 'A';
    }
    else if ((grade > 20) && (grade <= 25)) {
        return 'B';
    }
    else if ((grade > 15) && (grade <= 20)) {
        return 'C';
    }
    else if ((grade > 10) && (grade <= 15)) {
        return 'D';
    }
    else if ((grade > 5) && (grade <= 10)) {
        return 'E';
    } 
    else if ((grade >= 0) && (grade <= 5)) {
        return 'F';
    }
}

rl.output('Type it the note:');

rl.on('line', input => {
    rl.output(`Grade: ${getGrade(input)}`);
    rl.output();

    rl.close();
});