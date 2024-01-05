var keysPressed = {};

document.addEventListener('keydown', function(event) {
    keysPressed[event.key] = true;
    if (keysPressed['i'] && keysPressed['m'] && keysPressed['a'] && keysPressed['y'] && keysPressed['r']) {
        document.getElementById('answerBox').type = 'password';
    }
});

document.addEventListener('keyup', function(event) {
    delete keysPressed[event.key];
});
