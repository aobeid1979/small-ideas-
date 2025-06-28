let start = 5;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;

    console.log(elapsed)

    if (elapsed > 2000) {
        done = 10;
    }

    if (done) {
        return;
    }

    requestAnimationFrame(step);
}

requestAnimationFrame(step);