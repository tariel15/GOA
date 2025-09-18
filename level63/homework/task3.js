function getPassword() {
    const password = prompt("Enter your password");

    if (password !== null && password.trim() !== "") {
        document.getElementById("passOut").textContent = `Your password is: ${password}`;
    } else {
        document.getElementById("passOut").textContent = "No password entered.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("passBtn").addEventListener("click", getPassword);
});