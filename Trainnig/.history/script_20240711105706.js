const inputitem = document.getElementById('input-input');

const onInput = (e) => {
    console.log(input);
}

inputitem.addEventListener('input', onInput);

const inputitem = document.getElementById('input-input');

const onInput = (e) => {
    console.log(e.target.value); // Corrected to log the value of the input field
}

inputitem.addEventListener('input', onInput);