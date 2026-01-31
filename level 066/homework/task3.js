function checkAnd() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = (num1 > 10) && (num2 > 10);

    document.getElementById("andOut").textContent = "შედეგი (AND): " + result;
}

document.getElementById("andBtn").addEventListener("click", checkAnd);
