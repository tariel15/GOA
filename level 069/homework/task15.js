function countEvenNumbersInArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
function countEvenNumbers() {
    const input = document.getElementById('arrayInput').value;
    const resultElem = document.getElementById('result');
    if (!input) {
        resultElem.textContent = 'გთხოვ, შეიყვანე რიცხვები, გამოყოფილი ვირთებით (,).';
        return;
    }
    const strArray = input.split(',').map(item => item.trim());
    const numArray = strArray.map(Number);
    if (numArray.some(isNaN)) {
        resultElem.textContent = 'შეიყვანე მხოლოდ ვალიდური რიცხვები.';
        return;
    }
    const evenCount = countEvenNumbersInArray(numArray);
    resultElem.textContent = `ლუწი რიცხვების რაოდენობაა: ${evenCount}`;
}
