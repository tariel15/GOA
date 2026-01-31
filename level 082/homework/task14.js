console.log("===== TASK 14: Filter cheap products =====");

const products = [
    {name: "Milk", price: 1.5},
    {name: "Bread", price: 0.8},
    {name: "Cheese", price: 2.5},
    {name: "Eggs", price: 0.5}
];
const cheapProducts = products.filter(product => product.price < 2);

console.log("Cheap products:", cheapProducts);