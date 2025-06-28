let start;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timeq
    }
    //requestAnimationFrame(step);
}

requestAnimationFrame(step);