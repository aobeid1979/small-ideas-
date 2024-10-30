const eKey = document.getElementById('first');
const eKeyCode = document.getElementById('second');
const eCode = document.getElementById('therd');
const input = document.querySelector('input');

const onKeyDown = (e) => {
    console.log(e.key);
    eKey.textContent = 'Key that was pressed: ' + e.key.upp ;
    eKeyCode.textContent = e.keyCode;
    eCode.textContent = e.code;
}

input.addEventListener('keydown', onKeyDown);

