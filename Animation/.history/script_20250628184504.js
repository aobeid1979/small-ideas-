let start;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    const el
    requestAnimationFrame(step);
}

requestAnimationFrame(step);