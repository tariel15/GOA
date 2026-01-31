
function showName() {
    const name = prompt("Enter your name");
    if (name !== null && name.trim() !== "") {
        document.getElementById("output").textContent = `Hello, ${name}!`;
    } else {
        document.getElementById("output").textContent = "No name entered.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nameBtn").addEventListener("click", showName);
});