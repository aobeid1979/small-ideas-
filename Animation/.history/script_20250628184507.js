let start;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    const elap
    requestAnimationFrame(step);
}

requestAnimationFrame(step);