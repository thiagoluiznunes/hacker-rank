'use strict';

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

ask(0);