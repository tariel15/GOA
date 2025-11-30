
let promiseState = "pending";
const myPromise = new Promise((resolve, reject) => {
    let internetRequest = true;
    setTimeout(() => {
        if (internetRequest) {
            resolve("Internet connected successfully!");
        } else {
            reject("Internet connection failed!");
        }
    }, 3000);
});
const checkInterval = setInterval(() => {
    console.log("Promise Status:", promiseState);
    if (promiseState !== "pending") {
        clearInterval(checkInterval);
    }
}, 500);
myPromise
    .then((msg) => {
        promiseState = "fulfilled";
        console.log("RESOLVED:", msg);
    })
    .catch((err) => {
        promiseState = "rejected";
        console.log("REJECTED:", err);
    });
//Promise არის ობიექტი, რომელიც წარმოადგენს ასინქრონული ოპერაციის მომავალ შედეგს  ან წარმატებით (resolved), ან შეცდომით (rejected).