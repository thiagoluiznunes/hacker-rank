'use strict'

let inner1, inner2, inner3, inner4, inner5;
let inner6, inner7, inner8, inner9;

btn5.onclick = function() {
    inner1 = document.getElementById('btn1').innerHTML;
    inner2 = document.getElementById('btn2').innerHTML;
    inner3 = document.getElementById('btn3').innerHTML;
    inner4 = document.getElementById('btn4').innerHTML;
    inner5 = document.getElementById('btn5').innerHTML;
    inner6 = document.getElementById('btn6').innerHTML;
    inner7 = document.getElementById('btn7').innerHTML;
    inner8 = document.getElementById('btn8').innerHTML;
    inner9 = document.getElementById('btn9').innerHTML;

    for (var i = 1; i <= 9; i++) {
        let btn = document.getElementById('btn'+i);
        let inner = btn.innerHTML;

        switch (btn.id) {
            case 'btn1':
                btn.innerHTML = inner4;
                break;
            case 'btn2':
                btn.innerHTML = inner1;
                break;
            case 'btn3':
                btn.innerHTML = inner2;
                break;
            case 'btn4':
                btn.innerHTML = inner7;
                break;
            case 'btn6':
                btn.innerHTML = inner3;
                break;
            case 'btn7':
                btn.innerHTML = inner8;
                break;
            case 'btn8':
                btn.innerHTML = inner9;
                break;
            case 'btn9':
                btn.innerHTML = inner6;
                break;
            default:
                break;
        }
    }
}