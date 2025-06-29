// const img = document.querySelector('img');

// let start;
// let done = false;

// function step(timestamp) {
//   if (start === undefined) {
//     start = timestamp;
//   }

//   const elapsed = timestamp - start;

//   if (elapsed > 200) {
//     done = true;
//   }

//   if (done) {
//     return;
//   }

//   // Circular motion parameters
//   const radius = 100; // Circle radius in pixels
//   const centerX = 200; // Center X position
//   const centerY = 200; // Center Y position
//   const angle = (elapsed / 1000) * Math.PI; // Convert time to angle (one full circle every 2 seconds)

//   // Calculate X and Y positions using trigonometry
//   const x = centerX + radius * Math.cos(angle);
//   const y = centerY + radius * Math.sin(angle);

//   img.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
//   requestAnimationFrame(step);
// }

// requestAnimationFrame(step);

function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250);
  ctx.rotate(-Math.PI / 2);

  ctx.strokeStyle = 'black';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 140, 0, Math.PI * 2, true);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#800000';
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
      ctx.strokeStyle = '#800000';
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  console.log(`${hr}:${min}:${sec}`);

  ctx.save();
  ctx.rotate((Math.PI / 6) * (hr + min / 60 + sec / 3600));
  ctx.strokeStyle = '#800000';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate((Math.PI / 30) * (min + sec / 60));
  ctx.strokeStyle = '#800000';
  ctx.
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

   ctx.save();
  ctx.rotate(Math.PI / 30 * sec);
  ctx.strokeStyle = '';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}

clock();
