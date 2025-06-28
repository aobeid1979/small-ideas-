let start;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;

    
    requestAnimationFrame(step);
}

requestAnimationFrame(step);