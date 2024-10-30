function createNweItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
     
    
    const ul = document.querySelector('.ul');
    ul.insertBefore(li, ul.childNodes[2]);
}

function createButton(className) {
    const button = document.createElement('button');
    button.className = className;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    

    return button;
}

function createIcon(className) {
    const icon = document.createElement('i');
    icon.className = `fas ${className}`;

    return icon;
}

createNweItem('Item 1');
