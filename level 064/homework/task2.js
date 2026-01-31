document.getElementById("doubleBtn").onclick = function() {
    const num = +document.getElementById("numInput").value;
    document.getElementById("numOut").textContent = isNaN(num) ? "Enter a number" : num * 2;
};