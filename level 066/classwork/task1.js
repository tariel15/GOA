const input1 = document.getElementById('int1');
const input2 = document.getElementById('int2');
const checkButton = document.getElementById('checkButton');
const resultParagraph = document.getElementById('result');
checkButton.addEventListener('click', function () {
    const value1 = input1.checked;
    const value2 = input2.checked;
    const result = value1 && value2;
    resultParagraph.textContent = 'შედეგი: ' + result;
})