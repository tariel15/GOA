const secondItem = document.getElementById("item2");
console.log("getElementById:", secondItem.textContent);

const allLi = document.getElementsByTagName("li");
console.log("getElementsByTagName:", allLi);

const listItems = document.getElementsByClassName("list-item");
console.log("getElementsByClassName:", listItems);
const item3 = document.getElementById("item3");
console.log("previousElementSibling of item3:", item3.previousElementSibling.textContent);ე
const item2 = document.getElementById("item2");
console.log("nextElementSibling of item2:", item2.nextElementSibling.textContent);

const ul = document.getElementById("myList");
console.log("firstChild of ul:", ul.firstChild); 
console.log("lastChild of ul:", ul.lastChild);
console.log("childNodes of ul:", ul.childNodes);
console.log("children of ul:", ul.children);

secondItem.style.color = "blue";
item3.style.fontWeight = "bold";