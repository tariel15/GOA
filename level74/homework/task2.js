document.getElementById("ageForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const dayError = document.getElementById("dayError");
    const monthError = document.getElementById("monthError");
    const yearError = document.getElementById("yearError");
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";
    const today = new Date();
    const inputDate = new Date(`${year}-${month}-${day}`);
    if (isNaN(inputDate.getTime())) {
        dayError.textContent = "Invalid date";
        return;
    }
    if (inputDate > today) {
        yearError.textContent = "Must be in the past";
        return;
    }
    let years = today.getFullYear() - year;
    let months = today.getMonth() + 1 - month;
    let days = today.getDate() - day;
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
});
