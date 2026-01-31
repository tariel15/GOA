
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("Unknown sound");
    }
}

class SmartAnimal extends Animal {
    constructor(name, intelligenceLevel) {
        super(name);
        this.intelligenceLevel = intelligenceLevel;
    }

    describe() {
        console.log(`${this.name} has intelligence level of ${this.intelligenceLevel}`);
    }
}
const dolphin = new SmartAnimal("Dolphin", 95);

dolphin.describe();
dolphin.sound();
