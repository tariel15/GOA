function multiplyArray(arr) {
    return arr.map(element => element * 2);
}
function processArray() {
    const input = document.getElementById('arrayInput').value;
    const resultElem = document.getElementById('result');
    if (!input) {
        resultElem.textContent = 'გთხოვ, ჩაწერე რიცხვების მასივი.';
        return;
    }
    const strArray = input.split(',').map(item => item.trim());
    const numArray = strArray.map(Number);
    if (numArray.some(isNaN)) {
        resultElem.textContent = 'გთხოვ, ჩაწერე მხოლოდ რიცხვები, ერთმანეთისგან გაყოფილი ვირთ.';
        return;
    }

    const multiplied = multiplyArray(numArray);
    resultElem.textContent = 'შედეგი: ' + multiplied.join(', ');
}
