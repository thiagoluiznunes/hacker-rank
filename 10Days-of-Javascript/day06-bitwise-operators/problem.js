'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: console.log
});

function compareBinary(b1, b2) {
    let binary = [];
    
    while (b1.length < b2.length) {
        b1.unshift(0);
    }
    console.log(b1)
    console.log(b2)

    for (let i = b2.length - 1; i >= 0; i--) {
        if (b1[i] && b2[i]) {
            binary.unshift(1);
        } else {
            binary.unshift(0);
        }
    }
    return binary;
}
function getMaxLessThanK(n, k) {
    let arr = Array(n).fill(0).map((s, i) => s+i+1);
    let arrAux = [];
    let aux1, aux2;

    for (let i = 0; i < arr.length; i++) {
        for (let x = i+1; x < arr.length; x++) {
            aux1 = arr[i].toString(2);
            aux2 = arr[x].toString(2);

            let binary1 = aux1.split('').map(s => parseInt(s));
            let binary2 = aux2.split('').map(s => parseInt(s));
            console.log(aux1);
            console.log(aux2);
            let newBinary = compareBinary(binary1, binary2);
            console.log('New binary:', newBinary);
            newBinary = parseInt(newBinary, 2);

            if (arrAux[i] < newBinary) {
                arrAux[i] = newBinary;
            }
        }
    }
}

rl.on('line', input => {
    let arr = input.trim().split(' ').map(s => parseInt(s));
    getMaxLessThanK(3, 2);

    rl.close();
});
