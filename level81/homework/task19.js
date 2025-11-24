
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

const newCar = { ...car, model: "Camry" };

console.log("Original car:", car);
console.log("New car:", newCar);
