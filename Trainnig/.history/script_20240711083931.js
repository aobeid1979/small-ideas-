const logo = document.querySelector('img');

const onClick = (e) => {
  //console.log(e.target);
  console.log(e.clientY);
  console.log(e.clientX);
};


logo.addEventListener('click', onClick);