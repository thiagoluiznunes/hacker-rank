'use strict'

// Literal form: compiled when script loaded
const re = /ab+c/;

// Constructor: performed at runtime
const re_ = new RegExp('ab+c');
const re_2 = new RegExp('^a.+a$|^e.+e$|^i.+i$|^o.*o$|^u.+u$');

const test = 'Thiago Luiz Pereira Nunes';
const test2 = 'Thiago foo barr Nunes';
const test3 = 'caaaaaaandy';
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
// Search matching and do not memorize 
console.log(test2.match('(?:foo) bar'));
// Search matching x if x is followed by y x(?=y)
console.log(test2.match('Thiago(?= foo)'));
// Search matching x if x isn't followed by y x(?=y)
console.log(test2.match('a(?!g)'));
// Search matching by x | y
console.log(test2.match('Thiago|Nunes'));
// Search by ocurrences number
console.log(test3.match('a{3}'));
console.log(test3.match('a{1,5}'));

const opened = 'aberta';
const he = 'ele';
const isci = 'isci';
const another = 'outro';
const bird = 'urubu';
const error = 'ee';
const aewxyzae = 'aewxyzae';

console.log(opened.match(re_2));
console.log(he.match(re_2));
console.log(isci.match(re_2));
console.log(another.match(re_2));
console.log(bird.match(re_2));
console.log(error.match(re_2));
console.log(aewxyzae.match(re_2));
