function createNweItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    document.querySelector('.items').appendChild(li); 
    
    const ul = document.querySelector('.ul');
    ul.insertBefore(li, ul.childNodes[0]);
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

create
