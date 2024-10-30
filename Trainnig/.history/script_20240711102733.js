// const eKey = document.getElementById('first');
// const eKeyCode = document.getElementById('second');
// const eCode = document.getElementById('therd');
// const input = document.querySelector('input');

// const onKeyDown = (e) => {
//     console.log(e.key);
//     eKey.textContent = e.key.toUpperCase();
//     eKeyCode.textContent = e.keyCode;
//     eCode.textContent = e.code;
// }

// input.addEventListener('keydown', onKeyDown);



const body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
    const dev body.innerHTML = `e.key: ${e.key}`;
    body.innerHTML = `e.keyCode: ${e.keyCode}`;
    body.innerHTML = `e.code: ${e.code}`;
})

