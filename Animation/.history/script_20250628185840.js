const img = document.querySelector('img');

let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  

  if (elapsed > 2000) {
    done = true;
  }

  if (done) {
    return;
  }
img.style.transform = `translateX(${elapsed / 20}px)`;
  requestAnimationFrame(step);
}

requestAnimationFrame(step);
