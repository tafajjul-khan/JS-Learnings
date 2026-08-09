class Vehicle{
    constructor(){
        if(this.constructor === Vehicle){
            throw new Error("Abstract classes can to be instantiated")
        }
    }

    accelerate(){
        throw new Error("Method accelerate() must be implimented")
    }

    break(){
        throw new Error("Method break() must be implimented")
    }

    startEngine(){
        console.log("Engine started")
    }
}

class Car extends Vehicle{
    accelerate(){
        console.log("Car: Pressing gas pedal...")
    }
    break(){
        console.log("Car: Applying Breaks...")
    }
}

// const myVehicle = new Vehicle()
// myVehicle.startEngine()
// myVehicle.accelerate()

const MyCar = new Car();
MyCar.startEngine();
MyCar.accelerate()
MyCar.break();