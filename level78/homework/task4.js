
const logoutBtn = document.getElementById('logoutBtn');
const message = document.getElementById('message');

// მოვუსმინოთ logout ღილაკზე დაჭერას
logoutBtn.addEventListener('click', () => {
    // 1. გასუფთავება (შეგიძლია გამოიყენო removeItem ან clear)
    // localStorage.removeItem('username'); // კონკრეტული გასაღების წაშლა
    localStorage.clear(); // ყველაფრის წაშლა

    // 2. შეტყობინების ჩვენება
    message.textContent = 'თქვენ გახვედით სისტემიდან ✅';

    // 3. სურვილისამებრ ღილაკის დამალვა
    logoutBtn.style.display = 'none';
});
