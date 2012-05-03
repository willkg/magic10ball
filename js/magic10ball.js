"use strict";

var messages = [
    'yes',
    'no',
    'maybe'
    //...
];

function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}
function init() {
    document
        .getElementById('shake-it')
        .addEventListener('click', function() {
            document
            	.getElementById('message')
            	.innerHTML = randomMessage();

        });
}
window.addEventListener('load', function ballLoad(evt) {
	window.removeEventListener('load', ballLoad);
	init();
});
