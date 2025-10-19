
function Car(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.drive = function () {
        this.mileage += 100;
        console.log(`${this.brand} ${this.model} გაიარა 100 კმ. ახალი mileage: ${this.mileage} კმ`);
    };
}

const car1 = new Car("Toyota", "Corolla", 2018, 50000);
const car2 = new Car("BMW", "X5", 2020, 30000);
const car3 = new Car("Honda", "Civic", 2015, 75000);

car1.drive();
car1.drive();

car2.drive();
car2.drive();

car3.drive();
car3.drive();

console.log("მონაცემები მანქანებზე:");
console.log(car1);
console.log(car2);
console.log(car3);
