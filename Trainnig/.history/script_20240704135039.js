function createNewItem(item) {
    const ul = document.querySelector('.ul'); // Ensure this is the correct selector
    
    const li = document.createElement('li');
    li.textContent = item; // Use the parameter value
    
    const newItem = ul.querySelector('li:nth-child(3)'); // Scope the selection to the ul element

    ul.insertBefore(li, newItem);
}