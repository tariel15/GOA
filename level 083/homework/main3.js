
import Product, { printName, printPrice } from './products.js';

const output = document.getElementById("output");
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
printName(product1, output);
printPrice(product1, output);

printName(product2, output);
printPrice(product2, output);
