document.getElementById("calculate-btn").addEventListener("click", () => {
    const day = +document.getElementById("day").value;
    const month = +document.getElementById("month").value;
    const year = +document.getElementById("year").value;

    if (!day || !month || !year) {
        alert("Please enter a valid date!");
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
        alert("Date cannot be in the future!");
        return;
    }
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
});