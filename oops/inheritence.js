// Superclass (Parent)
class Animal {
    eat() {
        console.log('Animal is eating...');
    }

    sleep() {
        console.log('Animal is sleeping...');
    }
}

// Subclass (Child) - Inherits from Animal
class Dog extends Animal {
    bark() {
        console.log('Dog is barking!');
    }
}

// Main
const myDog = new Dog();

// Inherited methods (from Animal)
myDog.eat();
myDog.sleep();

// Child class method
myDog.bark();