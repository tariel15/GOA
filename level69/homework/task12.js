function findMax() {
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
    let max = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }
    resultElem.textContent = `ყველაზე დიდი რიცხვი: ${max}`;
}
