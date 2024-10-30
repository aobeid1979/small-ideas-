const inputitem = document.getElementById('item-input');

const onInput = (e) => {
    console.log(e.target.value);
}

inputitem.addEventListener('input', onInput);

