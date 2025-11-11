const form = document.getElementById('nameForm');
const input = document.getElementById('username');
const greeting = document.getElementById('greeting');
const savedName = localStorage.getItem('username');
if (savedName) {
    greeting.textContent = `გამარჯობა, ${savedName}!`;
    form.style.display = 'none';
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = input.value.trim();

    if (name) {
        localStorage.setItem('username', name);
        greeting.textContent = `გამარჯობა, ${name}!`;
        form.style.display = 'none';
    }
});
