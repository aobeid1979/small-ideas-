let output;

const parent = document.querySelector('.parent');



output = parent;

parent.style.padding = '20px solid red';
parent.style.border = '1px solid black';
parent.style.margin = '30px solid red';
parent.style.backgroundColor = 'lightgrey';
parent.style.color = 'white';

const child = document.querySelector('.child');

child.style.padding = '20px solid red';
child.style.color = 'red';
child.style.backgroundColor = 'black';
child.style.border = '1px solid red';
child.style.margin = '30px solid red';

const child1 = document.querySelector('.child');

output child1.parentElement ;