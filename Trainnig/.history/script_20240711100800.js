const eKey = document.getElementById('first');
const eKeyCode = document.getElementById('second');
const eCode = document.getElementById('therd');
const input = document.querySelector('input');

const onKeyDown = (e) => {
    console.log(e.key);
    eKey.textContent = e.key;
    eKeyCode.textContent = e.keyCode;
}

input.addEventListener('keydown', onKeyDown);


