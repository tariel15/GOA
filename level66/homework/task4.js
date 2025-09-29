function checkOrNum() {
    const valA = Number(document.getElementById("valA").value);
    const valB = Number(document.getElementById("valB").value);

    const result = (valA < 5) || (valB < 5);

    document.getElementById("orNumOut").textContent = "შედეგი (OR): " + result;
}

document.getElementById("orNumBtn").addEventListener("click", checkOrNum);
