
import subtract from './math.js';
import { add, multiply } from './math.js';
const output = document.getElementById("output");
const a = 10;
const b = 5;
output.innerHTML += `Add: ${add(a, b)}<br>`;
output.innerHTML += `Multiply: ${multiply(a, b)}<br>`;
output.innerHTML += `Subtract: ${subtract(a, b)}<br>`;
