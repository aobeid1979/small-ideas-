const canvas = document.getElementById('my-canvas');

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = 'blue';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();


ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();


ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle ='blue';
ctx.strokeStyle = 'black';
ctx.fillText('Hello, Canvas!', 300, 100, 300);
ctx.strokeText('Hello, Canvas!', 300, 500, 300);

const img = document.querySelector('img');
img.style.display= 'none';

img.addEventListner