const addProduct = (data) => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(data.product);
    localStorage.setItem("products", JSON.stringify(products));
};
