
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Receipt verification (https://github.com/mozilla/receiptverifier)
    require('receiptverifier');

    // Installation button
    require('./install-button');

    // Install the x-view and x-listview tags
    require('layouts/view');
    require('layouts/list');

    // Write your app here.

    function formatDate(d) {
        return (d.getMonth()+1) + '/' +
            d.getDate() + '/' +
            d.getFullYear();
     }

    // Passing a function into $ delays the execution until the
    // document is ready
    $(function() {

      var STORAGE_KEY = 'magic10ball_messages';
      var DEFAULT_MESSAGES = ['yes', 'no', 'maybe'];
      function getMessages() {
        var messages = window.localStorage.getItem(STORAGE_KEY);
        if (messages == null) {
          messages = DEFAULT_MESSAGES.join('\n');
        }
        if (messages.length == 0) {
          messages = DEFAULT_MESSAGES.join('\n');
        }
        return messages.split('\n');
      };
      function randomMessage() {
        var messages = getMessages();
        return 'magic10ball says: ' + messages[Math.round(Math.random() * (messages.length - 1))];
      };
      function changeMessages() {
        // XXX: This is kind of terrible.
        var messages = window.localStorage.getItem(STORAGE_KEY);
        var data = $('#messages-textbox').val();
        if (data === messages) {
          document.getElementById('save-messages').disabled = true;
        } else {
          document.getElementById('save-messages').disabled = false;
        }
      };
      function saveMessages() {
        var data = $('#messages-textbox').val();
        window.localStorage.setItem(STORAGE_KEY, data);
        changeMessages();
      };
      var timeoutID = null;
      function shakeResolve() {
        /* Lame code here. */
        var ballClasses = document.getElementById('shake-it').className.split(/\s+/);
        var ball = $('#shake-it');
        for (var i=0; i < ballClasses.length; i++) {
          var cls = ballClasses[i];
          if (cls.substr(0, 4) == 'shak') {
            ball.removeClass(cls);
          }
        }
        $('#shake-it').removeClass('shaking');
        $('#message').text(randomMessage());
        timeoutID = null;
      }
      function shake() {
        if (timeoutID != null) {
          return;
        }
        var transform = Math.round(Math.random() * 2) + 1;
        $('#shake-it').addClass('shaking' + transform);
        $('#message').text('Shaking....');
        timeoutID = window.setTimeout(shakeResolve, 1500);
      };

      $('#shake-it').click(shake);
      /* TODO:
         window
         .addEventListener(
         'devicemotion',
         function() {
         alert('shaking');
         });*/
      $('#messages-textbox').val(getMessages().join('\n'));
      $('#messages-textbox').keypress(changeMessages);
      $('#save-messages').click(saveMessages);
      $('#change-messages').click(changeMessages);
    });
});
