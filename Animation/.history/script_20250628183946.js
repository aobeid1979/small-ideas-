function step(timestamp) {
    console.log(;
    requestAnimationFrame(step);
}

requestAnimationFrame(step);