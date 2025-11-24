
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Car: ${this.make} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(make, model, batteryLevel) {
        super(make, model);
        this.batteryLevel = batteryLevel;
    }

    displayInfo() {
        console.log(`Electric Car: ${this.make} ${this.model}, Battery Level: ${this.batteryLevel}%`);
    }
}

const tesla = new ElectricCar("Tesla", "Model S", 85);
tesla.displayInfo(); 
