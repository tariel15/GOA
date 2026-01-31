const numbers = [];

for (let i = 0; i <= 10; i++) {
    numbers.push({
        value: i,
        type: i % 2 === 0 ? "ლუწი" : "კენტი"
    });
}

const list = document.getElementById("numberList");

numbers.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `რიცხვი: ${item.value}, ტიპი: ${item.type}`;
    list.appendChild(li);
});
