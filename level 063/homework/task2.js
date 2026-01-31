function displayText() {
    const input = document.getElementById("userInput").value;
    document.getElementById("display").textContent = input || "Nothing entered.";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showBtn").addEventListener("click", displayText);
});