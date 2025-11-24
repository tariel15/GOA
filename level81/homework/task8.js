
class Animal {
    sound() {
        console.log("Unknown sound");
    }
}

class Dog extends Animal {

    sound() {
        console.log("Bark!");
    }
}

const animal = new Animal();
const dog = new Dog();

animal.sound();
dog.sound();
