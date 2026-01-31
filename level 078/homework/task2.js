
const valueEl = document.getElementById('value');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
let count = 0;
increaseBtn.addEventListener('click', () => {
    count++;
    valueEl.textContent = count;
});
decreaseBtn.addEventListener('click', () => {
    count--;
    valueEl.textContent = count;
});
