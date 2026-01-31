

const laptop = {
    brand: "Lenovo",
    RAM: "16GB",
    price: 1500,

    //  Method: ფუნქცია, რომელიც ასრულებს ქმედებას
    turnOn: function () {
        document.getElementById("message").textContent = "Laptop is on";
    }
};

//  ღილაკზე დაჭერისას გამოვიძახოთ turnOn() მეთოდი
document.getElementById("laptopBtn").addEventListener("click", function () {
    laptop.turnOn();
});

/*
ახსნა:
- "brand", "RAM", "price" არის properties (მახასიათებლები).
- "turnOn()" არის method (ქმედება).
- ღილაკზე დაჭერისას (click event) იძახებს laptop.turnOn().
- turnOn() შეცვლის <p id="message">-ს ტექსტს → "Laptop is on".
*/
