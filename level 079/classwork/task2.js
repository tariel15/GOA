async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        renderProducts(data);
    } catch (error) {
        console.error("დაფიქსირდა შეცდომა:", error);
    }
}
function renderProducts(products) {
    const container = document.getElementById("products");
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}">
            <p><b>კატეგორია:</b> ${product.category}</p>`;
        container.appendChild(div);
    });
}
getProducts();
