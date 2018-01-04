'use strict'

function Actor(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

let actor01 = new Actor('Julia', 'Roberts', 36);
let actor02 = new Actor('Kate', 'Winslet', 40);

console.log('First object: ', actor01);
console.log('Second object: ', actor02);