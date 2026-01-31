
const productPrices = new Map([
    ["Apple", 2.5],
    ["Banana", 1.2],
    ["Orange", 3.0],
    ["Mango", 4.0]
]);

const productList = document.getElementById("productList");
const updatedList = document.getElementById("updatedProductList");

for (const [product, price] of productPrices) {
    const li = document.createElement("li");
    li.textContent = `${product}: $${price.toFixed(2)}`;
    productList.appendChild(li);
}

if (productPrices.has("Banana")) {
    const oldPrice = productPrices.get("Banana");
    const newPrice = oldPrice * 1.2;
    productPrices.set("Banana", newPrice);
}

for (const [product, price] of productPrices) {
    const li = document.createElement("li");
    li.textContent = `${product}: $${price.toFixed(2)}`;
    updatedList.appendChild(li);
}
