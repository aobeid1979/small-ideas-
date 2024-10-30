function createNweItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    document.querySelector('items').appendChild(li);    
}

function createButton(className) {
    const button = document.createElement('button');
    button.className = className;
    const
    button.appendChild(document.createTextNode('Remove'));

    return button;
}