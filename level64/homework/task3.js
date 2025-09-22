document.getElementById("compBtn").onclick = () => {
    const a = +prompt("Enter first number:");
    const b = +prompt("Enter second number:");

    document.getElementById("compOut").textContent =
        isNaN(a) || isNaN(b) ? "Enter valid numbers"
            : a > b ? `${a} is greater than ${b}`
            : b > a ? `${b} is greater than ${a}`
            : "Both numbers are equal";
};