const logo = document.querySelector('img');

const onClick = (e) => {
  console.log(e.target);
};


logo.addEventListener('click', onClick);