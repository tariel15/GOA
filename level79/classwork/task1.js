// ცვლადები
let name = "tarieli";     // შეიძლება შენახული მნიშვნელობის შეცვლა
const age = 15;          // მუდმივი მნიშვნელობა, შეცვლა არ შეიძლება
//Template Strings
let message = `გამარჯობა, მე ვარ ${name} და ვარ ${age} წლის.`;
let fruits = ["ვაშლი", "ატამი", "ბანანი"];
let fruitList = "";
for (let fruit of fruits) {
    fruitList += fruit + " ";
}
//Arrow Function
const sum = (a, b) => a + b;
let result = sum(10, 20);
document.getElementById("output").innerHTML = `
    <b>ES6 მაგალითები:</b><br><br>
    <b>1) let და const:</b><br>
    name = ${name}, age = ${age}<br><br>
    <b>2) Template String:</b><br>
    ${message}<br><br>
    <b>3) For...of ციკლი:</b><br>
    ${fruitList}<br><br>
    <b>4) Arrow Function:</b><br>
    sum(10,20) = ${result}`;