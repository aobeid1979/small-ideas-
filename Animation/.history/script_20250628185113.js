let start = 5000;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;

    console.log(elapsed)

    if (elapsed > 2000) {
        done = false;
    }

    if (done) {
        return;
    }

    requestAnimationFrame(step);
}

requestAnimationFrame(step);