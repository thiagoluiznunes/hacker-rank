'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

const questions = [
    'What is your name?',
    'What is your fav habboy?',
    'What is your preferred programing language?'
];

const answers = [];

function ask(i) {
    process.stdout.write(`\n${questions[i]} \n\n`);
}

process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
    	ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write(`\nGo ${answers[0]} ${answers[1]} ${answers[2]} \n\n`);
});

process.on('exit', () => {
    process.stdout.write('Copyright 2017 Thiago Luiz \n\n');
});

ask(0);
