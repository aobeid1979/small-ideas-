const img = document.querySelector('img');

let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  img.style.trasform =

  if (elapsed > 2000) {
    done = true;
  }

  if (done) {
    return;
  }

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
