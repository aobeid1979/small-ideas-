const logo = document.querySelector('img');

const onClick = (e) => {
  console.log(e.target);
  console.log(e.cli)
};


logo.addEventListener('click', onClick);