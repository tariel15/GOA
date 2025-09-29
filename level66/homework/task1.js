function checkOr() {
    const val1 = document.getElementById("val1").checked;
    const val2 = document.getElementById("val2").checked;

    const result = val1 || val2;

    document.getElementById("orOut").textContent = "შედეგი (OR): " + result;
}

document.getElementById("orBtn").addEventListener("click", checkOr);
