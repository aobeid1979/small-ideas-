
  
  // insertBefore Example
  function insertBeforeItem() {
    const ul = document.querySelector('ul');
  
    const li = document.createElement('li');
    li.textContent = 'insertBefore';
  
    const thirdItem = document.querySelector('li.node-3 ');
  
    ul.insertBefore(li, thirdItem);
  }
  
  
  insertBeforeItem();
  
  /*
  <!-- beforebegin -->
  <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
  </p>
  <!-- afterend -->
  */
  