const displayText = document.getElementById('displayText');
const backBtn = document.getElementById('backBtn');

const text = sessionStorage.getItem('pageText');
displayText.textContent = text ? text : 'ჩანაწერი ვერ მოიძებნა';

backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});
