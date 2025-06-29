const img = document.querySelector('img');

let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  if (elapsed > 200) {
    done = true;
  }

  if (done) {
    return;
  }

  // Circular motion parameters
  const radius = 100; // Circle radius in pixels
  const centerX = 200; // Center X position
  const centerY = 200; // Center Y position
  const angle = (elapsed / 1000) * Math.PI; // Convert time to angle (one full circle every 2 seconds)

  // Calculate X and Y positions using trigonometry
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  img.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
  requestAnimationFrame(step);
}

requestAnimationFrame(step);

function clock() {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');


    ctx.save();
    ctx.clearRect(0,0,);
}
