function createNweItem(item) {
    const li = document.createElement('li');
    li.textContent = 'item;

  
     
    
    const ul = document.querySelector('.ul');
    

    const newItem = document.querySelector('li:nth-child(1)');

    ul.insertBefore(li, newItem);
}



createNweItem();
