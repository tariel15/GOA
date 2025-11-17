var name = "tarieli";

// let – შეიძლება მნიშვნელობის შეცვლა, მაგრამ ხელახლა გამოცხადება იმავე ბლოკში არ შეიძლება
let age = 15;
// const – მუდმივი მნიშვნელობა, შეცვლა ან ხელახლა გამოცხადება არ შეიძლება
// რადგან const ნიშნავს "ფიქსირებულ", ერთჯერადად მინიჭებულ მნიშვნელობას
const country = "Georgia";
let result = `My name is ${name}, I am ${age}, I live in ${country}`;
document.getElementById("output").textContent = result;