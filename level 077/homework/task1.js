// ფორმისა და შედეგის ელემენტების მოძიება
const form = document.getElementById("myForm");
const result = document.getElementById("result");
// ვუსმენთ submit მოვლენას
form.addEventListener("submit", function (event) {
    // ვაჩერებთ გვერდის refresh-ს
    event.preventDefault();
    // ვიღებთ შეყვანილ მნიშვნელობას
    const username = form.username.value;
    // ვაჩვენებთ შედეგს გვერდზე
    result.textContent = `შეყვანილი მომხმარებელი: ${username}`;
    // სურვილისამებრ, შეგვიძლია ფორმის გაწმენდა
    form.reset();
});
