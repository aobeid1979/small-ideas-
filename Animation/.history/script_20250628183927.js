function step(timesta) {
    console.log("step");
    requestAnimationFrame(step);
}

requestAnimationFrame(step);