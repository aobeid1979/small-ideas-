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


ctx.forn