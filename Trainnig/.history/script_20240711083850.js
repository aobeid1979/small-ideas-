const logo = document.querySelector('img');

const onClick = (e) => {
  console.log(e.target);
  console.log(e)
};


logo.addEventListener('click', onClick);