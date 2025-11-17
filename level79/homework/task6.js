
function greet(name) {
    return `Hello, ${name}`;
}

// Arrow function — უფრო მოკლე ჩანაწერი
// ფუნქცია აბრუნებს Goodbye, {name}
const goodbye = (name) => `Goodbye, ${name}`;
const out = document.getElementById("output");

out.textContent += greet("tarieli") + "\n";
out.textContent += greet("Ana") + "\n";

out.textContent += goodbye("tarieli") + "\n";
out.textContent += goodbye("Nika") + "\n";



/*
    რა უპირატესობა აქვს arrow function-ს?

    უფრო მოკლე და მარტივი სინტაქსი
        function(name) { return ... }  
        ბევრად მოკლებად → (name) => ...

    განსაკუთრებით კარგია პატარა, ერთჯერადი ფუნქციებისთვის:
        - map()
        - filter()
        - forEach()
        - eventListener-ების შიგნით მცირე callback-ებისთვის

        button.addEventListener("click", () => console.log("clicked"));

    არ აქვს საკუთარი this — მართლა დიდი უპირატესობაა
        arrow function this-ს არ ცვლის,
        ამიტომ eventListener-ებში და callback-ებში ხშირად უფრო მოსახერხებელია.
*/
