function step() {
    console.log("step");
    requestAnimationFrame(step);
}

requestAnimationFrame(step);