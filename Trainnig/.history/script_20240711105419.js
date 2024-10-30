const input = document.getElementById('input-input');

const onInput = (e) => {
    console.log(e.target.value);

input.addEventListener('input', onInput);