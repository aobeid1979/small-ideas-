const logo = document.querySelector('form-control');

const onClick = (e) => {
  //console.log(e.target);
  console.log(e.offset);
  console.log(e.clientX);
};


logo.addEventListener('click', onClick);