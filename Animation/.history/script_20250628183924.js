function step(timest) {
    console.log("step");
    requestAnimationFrame(step);
}

requestAnimationFrame(step);