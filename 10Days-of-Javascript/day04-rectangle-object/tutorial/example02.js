'use strict'

let actor_1 = {
	Name: 'Brad Pit',
	Age: 45,
	childrens: () => 3
};

let actor_2 = Object.create(actor_1);

console.log('Childrens: ', actor_2.childrens());