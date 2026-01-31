
const nameForm = document.getElementById('nameForm');
const usernameInput = document.getElementById('username');
const greeting = document.getElementById('greeting');
const logoutBtn = document.getElementById('logoutBtn');

const savedName = localStorage.getItem('username');
if (savedName) {
    greeting.textContent = `გამარჯობა, ${savedName}!`;
    nameForm.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
}

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = usernameInput.value.trim();
    if (name) {
        localStorage.setItem('username', name);
        greeting.textContent = `გამარჯობა, ${name}!`;
        nameForm.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    greeting.textContent = 'თქვენ გახვედით სისტემიდან';
    logoutBtn.style.display = 'none';
    nameForm.style.display = 'block';
});
const countEl = document.getElementById('sessionCount');
const incrementBtn = document.getElementById('incrementBtn');
const resetCounterBtn = document.getElementById('resetCounterBtn');

let count = sessionStorage.getItem('sessionCount');
if (!count) count = 0;
countEl.textContent = count;

incrementBtn.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
    sessionStorage.setItem('sessionCount', count);
});

resetCounterBtn.addEventListener('click', () => {
    count = 0;
    countEl.textContent = count;
    sessionStorage.removeItem('sessionCount');
});

const pageInput = document.getElementById('pageInput');
const goPage2Btn = document.getElementById('goPage2Btn');

goPage2Btn.addEventListener('click', () => {
    const text = pageInput.value.trim();
    if (text) {
        sessionStorage.setItem('pageText', text);
        window.location.href = 'page2.html';
    } else {
        alert('გთხოვთ შეიყვანოთ ტექსტი');
    }
});
