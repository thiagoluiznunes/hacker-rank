'use strict'

let myButton = document.getElementById('btn');
let labelVar = 0;

myButton.onclick = function() {
    labelVar++;
    myButton.innerHTML = labelVar;
}