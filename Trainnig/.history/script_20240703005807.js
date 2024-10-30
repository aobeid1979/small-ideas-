let output;

const parent = document.querySelector('.parent');



output = parent.childNodes[0];

parent.childNodes[0].textContent = 'Hello World';



console.log(output);