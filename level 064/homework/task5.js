document.getElementById("calcBtn").onclick = () => {
    const a = +prompt("Enter first number:");
    const b = +prompt("Enter second number:");

    document.getElementById("calcOut").textContent =
        isNaN(a) || isNaN(b) ? "Enter valid numbers" : `Sum: ${a + b}`;
};