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
    const inner = res.innerHTML;
    const reg = new RegExp('\\*|\\+|\\-|\\/');
    const position = inner.search(reg);
    const operatior = inner.charAt(position);
    const arr = inner.split(operatior);

    const b1 = parseInt(arr[0], 2);
    const b2 = parseInt(arr[1], 2);

    res.innerHTML = '';
    switch (operatior) {
        case '+':
            res.innerHTML += (b1+b2).toString(2);
            break;
        case '-':
            res.innerHTML += (b1-b2).toString(2);
            break;
        case '*':
            res.innerHTML += (b1*b2).toString(2);
            break;
        case '/':
            res.innerHTML += (b1/b2).toString(2);
            break;
    }
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