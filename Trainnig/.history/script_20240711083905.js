const logo = document.querySelector('img');

const onClick = (e) => {
  console.log(e.target);
  console.log(e.clientY);
  
};


logo.addEventListener('click', onClick);