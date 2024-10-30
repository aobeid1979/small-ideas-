const btn = document.querySelector('#clear');
const h1 = document.querySelector('h1');

btn.addEventListener('click', () => {
    rermove(li)
    console.log('Button clicked');
    h1.style.color = 'red';

})

const li = document.querySelectorAll('li');

