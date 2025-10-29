let time = 10;
const countdown = setInterval(() => {
    console.log("დარჩენილი დრო:", time);
    time--;
    if (time < 0) {
    clearInterval(countdown);
    console.log("Time up");
    }
}, 1000);