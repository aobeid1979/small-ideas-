const logo = document.querySelector('img');

const onClick = (e) => {
  //console.log(e.target);
  console.log(e.offset);
  console.log(e.clientX);
};


logo.addEventListener('click', onClick);