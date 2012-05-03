"use strict";

var STORAGE_KEY = 'magic10ball_messages';
var default_messages = ['yes', 'no', 'maybe'];
function getMessages() {
    var messages = window.localStorage.getItem(STORAGE_KEY);
    if (messages == null) {
        messages = default_messages.join('\n');
    }
    if (messages.length == 0) {
        messages = default_messages.join('\n');
    }
    return messages.split('\n');
}
function randomMessage() {
    var messages = getMessages();
    return messages[Math.round(Math.random() * (messages.length - 1))];
}
function saveMessages() {
    var data = document.getElementById('messages-textbox').value;
    window.localStorage.setItem(STORAGE_KEY, data);
    swap();
}
function swap() {
    var children = document.body.children;
    for (var i=0; i < children.length; i++) {
        var el = children[i];
        if (!el.classList.contains('view')) {
            continue;
        }
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    }
}
var timeoutID = null;
function shake_resolve() {
    /* Lame code here. */
    var ball = document.getElementById('shake-it');
    for (var i=0; i < ball.classList.length; i++) {
        var cls = ball.classList[i]
        if (cls.substr(0, 4) == 'shak') {
            ball.classList.remove(cls);
        }
    }
    document
        .getElementById('shake-it')
        .classList.remove('shaking');
    document
        .getElementById('message')
        .innerHTML = randomMessage();
    timeoutID = null;
}
function shake() {
    if (timeoutID != null) {
        return;
    }
    var transform = Math.round(Math.random() * 2) + 1;
    document
        .getElementById('shake-it')
        .classList.add('shaking' + transform);
    document
        .getElementById('message')
        .innerHTML = 'Shaking....';
    timeoutID = window.setTimeout(shake_resolve, 1500);
    document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
}
function init() {
    document
        .getElementById('shake-it')
        .addEventListener('click', shake);
    /* TODO:
    window
        .addEventListener(
            'devicemotion',
            function() {
                alert('shaking');
            });*/
    document
        .getElementById('messages-textbox')
        .value = getMessages().join('\n');
    document
        .getElementById('save-button')
        .addEventListener('click', saveMessages);
    document
        .getElementById('settings-button')
        .addEventListener('click', swap);
}

window.addEventListener('load', function ballLoad(evt) {
	window.removeEventListener('load', ballLoad);
	init();
});
