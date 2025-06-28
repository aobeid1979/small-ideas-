function step(time) {
    console.log("step");
    requestAnimationFrame(step);
}

requestAnimationFrame(step);