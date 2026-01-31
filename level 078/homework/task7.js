
const registerForm = document.getElementById('registerForm');
const regUsername = document.getElementById('regUsername');
const regPassword = document.getElementById('regPassword');

const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');

const welcomeMsg = document.getElementById('welcomeMsg');
const logoutBtn = document.getElementById('logoutBtn');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = regUsername.value.trim();
    const password = regPassword.value.trim();

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful! You can now login.');
        registerForm.reset();
    }
});
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        registerForm.style.display = 'none';
        loginForm.style.display = 'none';

        welcomeMsg.textContent = `Welcome, ${username}!`;
        welcomeMsg.style.display = 'block';
        logoutBtn.style.display = 'inline-block';
    } else {
        alert('Invalid username or password!');
    }
});
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    registerForm.style.display = 'block';
    loginForm.style.display = 'block';
    welcomeMsg.style.display = 'none';
    logoutBtn.style.display = 'none';
});
