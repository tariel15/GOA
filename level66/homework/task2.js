function checkNot() {
    const val = document.getElementById("notVal").checked;
    const result = !val;

    document.getElementById("notOut").textContent = "შედეგი (NOT): " + result;
}

document.getElementById("notBtn").addEventListener("click", checkNot);
