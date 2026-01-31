
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("Unknown sound");
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    sound() {
        console.log("Meow!");
    }
}
const cat = new Cat("Whiskers", "white");

console.log(cat.name);
console.log(cat.color);
cat.sound();
