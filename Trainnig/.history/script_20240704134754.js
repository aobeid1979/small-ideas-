function createNweItem(item) {
    const ul = document.querySelector('.ul');
    
    const li = document.createElement('li');
    li.textContent = 'item';

    const newItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, newItem);
}



createNweItem();
