function createNweItem(item) {
    const li = document.createElement('li');
    li.textContent = item;

  
     
    
    const ul = document.querySelector('.ul');
    

    const newItem = ul.appendChild(li);
}



createNweItem('Item 1');