const inputitem = document.getElementById('item-input');

const onInput = (e) => {
    console.log(e.target);
}

inputitem.addEventListener('input', onInput);

