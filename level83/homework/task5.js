
const numbers = [1, 2, 2, 3, 4, 4, 5, 6];
const numSet = new Set(numbers);

let sum = 0;
for (const num of numSet) {
    sum += num;
}
const sumResult = document.getElementById("sumResult");
sumResult.textContent = `უნიკალური რიცხვების ჯამი: ${sum}`;
