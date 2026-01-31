
const nums = [5, 10, 15, 20];

const box = document.getElementById("output");
box.textContent = "";

// for...of — გამოიყენება მასივის ელემენტებზე გადასასვლელად
// ყოველ iteration-ზე გვიბრუნებს პირდაპირ მნიშვნელობას (5, 10, 15...)
for (let num of nums) {
    box.textContent += num + "\n";
}

/*
    განსხვავება for in და for of შორის:

    for...in  
        - გამოიყენება ობიექტის key-ებზე გადასასვლელად
        - აბრუნებს key-ს (ინდექსს ან property-ს)
        - მაგალითად: 0, 1, 2... ან "name", "age"

    for...of  
        - გამოიყენება მასივის ან Iterable ტიპის მნიშვნელობებზე გადასასვლელად
        - აბრუნებს პირდაპირ მნიშვნელობას
        - მაგალითად: 5, 10, 15, 20
*/
