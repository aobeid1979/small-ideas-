function step(timestamp) {
    console.log("step");
    requestAnimationFrame(step);
}

requestAnimationFrame(step);