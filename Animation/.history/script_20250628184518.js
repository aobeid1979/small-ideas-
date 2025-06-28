let start;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    const elapsed = times
    requestAnimationFrame(step);
}

requestAnimationFrame(step);