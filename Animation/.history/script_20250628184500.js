let start;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    
    requestAnimationFrame(step);
}

requestAnimationFrame(step);