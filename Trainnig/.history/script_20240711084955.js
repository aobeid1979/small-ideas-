const logo = document.querySelector('h1');

console.log(logo);

const onClick = (e) => {
  console.log(e.target);
   console.log(e.offsetY);
  console.log(e.offsetX);
};


logo.addEventListener('click', onClick);