
let time = 0;
const intervalId = setInterval(() => {
    time++;

    console.log("Current minutes: " + time);
    if (time === 34) {
    clearInterval(intervalId);
    console.log("Time up");
    }
}, 60000);