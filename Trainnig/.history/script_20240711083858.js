const logo = document.querySelector('img');

const onClick = (e) => {
  console.log(e.target);
  console.log(e.client)
};


logo.addEventListener('click', onClick);