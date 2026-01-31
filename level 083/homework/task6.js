
const weatherIsGood = true;
const weatherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (weatherIsGood) {
            resolve("ამინდი კარგია, გასეირნება შემიძლია!");
        } else {
            reject("ამინდი ცუდია, ვერ გავდივარ.");
        }
    }, 2000);
});
const resultElement = document.getElementById("weatherResult");
weatherPromise
    .then((message) => {
        resultElement.textContent = message;
    })
    .catch((errorMessage) => {
        resultElement.textContent = errorMessage;
    });
