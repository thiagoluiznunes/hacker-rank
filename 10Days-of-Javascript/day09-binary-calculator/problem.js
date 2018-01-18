'use strict'

let res = document.getElementById('res');
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');

btn0.onclick = () => {
    res.innerHTML += '0';
}
btn1.onclick = () => {
    res.innerHTML += '1';
}
btnClr.onclick = () => {
    res.innerHTML = '';
}
btnEql.onclick = () => {
    res.innerHTML = '';
    res.innerHTML += 'result';
}
btnSum.onclick = () => {
    res.innerHTML += '+';
}
btnSub.onclick = () => {
    res.innerHTML += '-';
}
btnMul.onclick = () => {
    res.innerHTML += '*';
}
btnDiv.onclick = () => {
    res.innerHTML += '/';
}