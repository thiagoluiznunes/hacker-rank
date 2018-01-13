const clickButton = document.createElement('button');

clickButton.id = 'myButton';
clickButton.innerHTML = 'Click Me';
clickButton.style.background = '#4FFF8F';

document.body.appendChild(clickButton);

clickButton.onclick = function() {
    clickButton.innerHTML = 'New inner';
}