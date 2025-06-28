let start;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;

    console.log(elapsed)

    if (elapsed > 2000) {
        done = true;
    }

    if ()
    requestAnimationFrame(step);
}

requestAnimationFrame(step);