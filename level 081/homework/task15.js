
class Bike {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    showSpeed() {
        console.log(`${this.brand} current speed: ${this.speed} km/h`);
    }
}

class SpeedBike extends Bike {
    constructor(brand, speed) {
        super(brand, speed);
    }

    increaseSpeed(amount) {
        this.speed += amount;
        console.log(`${this.brand} speed increased by ${amount}. Current speed: ${this.speed} km/h`);
    }
}
const myBike = new SpeedBike("Yamaha", 50);

myBike.showSpeed();
myBike.increaseSpeed(20);
myBike.showSpeed();
