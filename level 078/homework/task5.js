const countEl = document.getElementById('count');
const btn = document.getElementById('increment');

// წავიკითხოთ უკვე არსებული მნიშვნელობა sessionStorage-დან
let count = sessionStorage.getItem('sessionCount');

// თუ არ არსებობს, დავაყენოთ 0
if (!count) {
    count = 0;
    sessionStorage.setItem('sessionCount', count);
}

// საწყისი მნიშვნელობის ჩვენება
countEl.textContent = count;

//  ღილაკზე დაჭერისას counter გაიზარდოს
btn.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
    sessionStorage.setItem('sessionCount', count);
});
