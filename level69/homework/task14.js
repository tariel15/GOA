function checkFizzBuzz() {
    const input = document.getElementById('numberInput').value;
    const num = Number(input);
    const resultElem = document.getElementById('result');
    if (isNaN(num)) {
        resultElem.textContent = 'გთხოვ, ჩაწერე სწორი რიცხვი.';
        return;
    }
    if (num % 3 === 0 && num % 5 === 0) {
        resultElem.textContent = 'FizzBuzz (იყოფა 3-ზეც და 5-ზეც)';
    } else if (num % 3 === 0) {
        resultElem.textContent = 'Fizz (იყოფა მხოლოდ 3-ზე)';
    } else if (num % 5 === 0) {
        resultElem.textContent = 'Buzz (იყოფა მხოლოდ 5-ზე)';
    } else {
        resultElem.textContent = 'არც 3-ზე და არც 5-ზე არ იყოფა';
    }
}
