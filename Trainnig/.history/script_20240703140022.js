const div = document.createElement('div');


div.style.color = 'red';
div.id = 'myDiv';
div.className = 'myDivClass';
div.title = 'Hello, World!';

const text = document.createTextNode('Hello, World!');

div.appendChild(text);

console.log(div);


const newDiv = document.querySelector('title');

newDiv.appendChild(div);

newDiv

console.log(newDiv);