const logo = document.querySelector('form-control');

const onClick = (e) => {
  //console.log(e.target);
  console.log(e.offsetY);
  console.log(e.offsetY);
};


logo.addEventListener('click', onClick);