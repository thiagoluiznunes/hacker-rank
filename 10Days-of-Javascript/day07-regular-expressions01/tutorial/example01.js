'use strict'

// Literal form: compiled when script loaded
const re = /ab+c/;

// Constructor: performed at runtime
const re_ = new RegExp('ab+c');

const test = 'Thiago Luiz Pereira Nunes';
const test2 = 'Thiago foo barr Nunes';
// '\'
console.log(test.match('\a'));
// Matches to the beginning of the text
console.log(test.match('^T'));
// Matches to the end of the text
console.log(test.match('Nunes$'));
// Matches to the expression repeated 0 or more times
console.log(test.match('t*'));
// Matches to the expression repeated 1 or more times
console.log(test.match('t+'));
// Matches to the expression repeated 0 or 1 times
console.log(test.match('a?g'));
// Matches to the any character
console.log(test.match('.a'));
console.log(test.match('.ra'));
// Search matching and do memorize
console.log(test2.match('(foo) (bar)'));