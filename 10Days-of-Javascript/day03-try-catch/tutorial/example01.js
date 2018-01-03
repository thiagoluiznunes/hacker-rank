'use strict'

function getElement(arr, pos) {
    return arr[pos];
}

let arr = [1, 2, 3, 4, 5];

try {
    console.log(getElement(arr, 5));
} catch (e) {
    console.log(e.message);
}

console.log('The program continued executing!');