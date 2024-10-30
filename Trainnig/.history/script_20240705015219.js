const btn = document.querySelector('#clear');
const h1 = document.querySelector('h1');
const li = document.querySelector('li');

btn.addEventListener('click', () => {
    remove(li)
    console.log('Button clicked');
    h1.style.color = 'red';

})



