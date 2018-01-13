const clickButton = document.createElement('button');
const clickButton2 = document.createElement('button2');
let aux = 0;

clickButton.id = 'myButton';
clickButton.innerHTML = 'Click Me';
clickButton.style.background = '#4FFF8F';

clickButton2.id = 'myButton2';
clickButton2.innerHTML = 'Click Me Again';
clickButton2.style.background = '#4FFF8F';
clickButton2.style.marginLeft = '5px';

document.body.appendChild(clickButton);
document.body.appendChild(clickButton2);

clickButton.onclick = function() {
    aux++;
    clickButton.innerHTML = aux;
}

clickButton2.addEventListener('click', function() {
    clickButton2.innerHTML = 'You clicked me"';
    clickButton2.classList.add('btn-class');
});