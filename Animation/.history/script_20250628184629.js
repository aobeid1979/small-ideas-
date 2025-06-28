let start;
let done = false;

function step(timestamp) {
    if( start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;

    console.log(elapsed)

    if 
    requestAnimationFrame(step);
}

requestAnimationFrame(step);