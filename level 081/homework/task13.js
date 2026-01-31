
class WashingMachine {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} is starting a regular wash.`);
    }
}

class SmartWashingMachine extends WashingMachine {
    constructor(brand, model) {
        super(brand, model);
    }

    quickWash() {
        console.log(`${this.brand} ${this.model} is performing a quick wash.`);
    }
}


const smartWM = new SmartWashingMachine("LG", "TurboWash 360");

smartWM.start();
smartWM.quickWash();
