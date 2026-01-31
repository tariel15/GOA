const intervalId = setInterval(() => {
    const now = new Date();
    console.log("მიმდინარე თარიღი და დრო:", now);
}, 1000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("ინტერვალი შეჩერდა");
}, 10000);