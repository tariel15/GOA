
const button = document.getElementById('addNumberBtn');
button.addEventListener('click', function () {
    // Math.random() აბრუნებს შემთხვევით ათწილად რიცხვს 0-დან 1-მდე (მაგ. 0.543)
    // Math.floor() ამრგვალებს რიცხვს ქვემოთ უახლოეს მთელ რიცხვამდე
    // შედეგად ვიღებთ შემთხვევით მთელ რიცხვს 0-დან 1000-მდე
    const randomNumber = Math.floor(Math.random() * 1001);
    const p = document.createElement('p');
    p.textContent = `შემთხვევითი რიცხვი: ${randomNumber}`;
    document.body.appendChild(p);
});
