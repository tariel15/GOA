function showAge() {
    const age = document.getElementById("ageInput").value;

    if (age !== "" && !isNaN(age) && age > 0) {
        document.getElementById("ageOut").textContent = `Your age is: ${age}`;
    } else {
        document.getElementById("ageOut").textContent = "Please enter a valid age.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ageBtn").addEventListener("click", showAge);
});