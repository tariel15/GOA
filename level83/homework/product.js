
export default class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
export function printName(product, element) {
    element.innerHTML += `Product Name: ${product.name}<br>`;
}

export function printPrice(product, element) {
    element.innerHTML += `Product Price: $${product.price}<br>`;
}
