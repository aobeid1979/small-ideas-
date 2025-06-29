/

function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250);
  ctx.rotate(-Math.PI / 2);

  ctx.strokeStyle = 'black';
  ctx.fillStyle = '¤f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 200, 0, Math.PI * 2, true);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#333';
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  ctx.restore();
}

clock();
