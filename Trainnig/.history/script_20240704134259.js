function createNweItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

  
     
    
    const ul = document.querySelector('.ul');
    ul.insertBefore(li, ul.childElementCount > 0 ? ul.children[0] : null);
}



createNweItem('Item 1');