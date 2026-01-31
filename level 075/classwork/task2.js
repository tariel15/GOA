const products = [
    { name: "product1", price: 100, desc: "ery tr4yrtyrtytry rtytryr" },
    { name: "product2", price: 200, desc: "eryert yrty rtyrrtyrt" },
    { name: "product3", price: 300, desc: "eryerttyeryetyry r" },
    { name: "product4", price: 400, desc: "eryeryert yertytryrt" },
];
const productsContainer = document.getElementById("productsContainer");
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    productsContainer.innerHTML += `
        <div class="product">
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
            <p>Price: $${product.price}</p>
            <button>Buy</button>
            <hr>
        </div>
    `;
}
