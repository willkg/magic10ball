"use strict";

var messages = [
    'yes',
    'no',
    'maybe'
    //...
];

function randomMessage() {
    return messages[Math.round(Math.random() * messages.length)];
}

function init() {
    document
        .getElementById('shake-it')
        .addEventListener('click', function() {
            document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
            document
            	.getElementById('message')
            	.innerHTML = randomMessage();

        });

    /* TODO:
    window
        .addEventListener(
            'devicemotion',
            function() {
                alert('shaking');
            });*/
}

window.addEventListener('load', function ballLoad(evt) {
	window.removeEventListener('load', ballLoad);
	init();
});
