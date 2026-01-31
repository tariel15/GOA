// async keyword ნიშნავს, რომ ფუნქცია იმუშავებს ასინქრონულად
// ეს გვაძლევს საშუალებას გამოვიყენოთ await ფუნქციის შიგნით
async function getProducts() {
    const box = document.getElementById("products");
    box.innerHTML = "<p>იტვირთება...</p>";
    try {
        // await ნიშნავს "დაიცადე სანამ ეს ოპერაცია დასრულდება"
        // fetch აბრუნებს დაპირებას await კი გვერდს არ აუარებს და ელოდება შედეგს
        let response = await fetch("https://fakestoreapi.com/products");
        let products = await response.json();
        box.innerHTML = "";
        products.forEach(prod => {
            const div = document.createElement("div");
            div.className = "product";
            div.innerHTML = `
                <h3>${prod.title}</h3>
                <p><b>Category:</b> ${prod.category}</p>
                <img src="${prod.image}" alt="${prod.title}">`;
            box.appendChild(div);
        });
    } catch (error) {
        box.innerHTML = "<p style='color:red;'>დაფიქსირდა შეცდომა!</p>";
        console.error(error);
    }
}
