

const btn = document.querySelectorAll('.btn');

console.log(btn);



btn.forEach(function(button) {
    button.stylebackgroundColor = 'red'; // Change 'red' to any color you prefer
    button.style.color = 'red'; // Change 'red' to any color you prefer
  });