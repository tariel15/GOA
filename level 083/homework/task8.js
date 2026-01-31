const loadingResult = document.getElementById("loadingResult");
const simulateLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("მონაცემები ჩაიტვირთა!");
        } else {
            reject("ჩატვირთვა ვერ მოხერხდა!");
        }
    }, 1500);
});
simulateLoading
    .then(message => {
        loadingResult.textContent = message;
    })
    .catch(errorMessage => {
        loadingResult.textContent = errorMessage;
    });
