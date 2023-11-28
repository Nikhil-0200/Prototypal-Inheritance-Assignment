"use strict";

function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function(){
    this.speed += 10;

    console.log(`Car Spped After Acc: ${this.speed}`)
};

Vehicle.prototype.brake = function(){
    this.speed -= 5;
};

Vehicle.prototype.refuel = function(){
    console.log(`${this.brand} - Refulling Needed`);    
};

function Car(brand, model, speed, fuelType, noOfWheels){
    Vehicle.call(this, brand, model, speed, fuelType);

    this.noOfWheels = noOfWheels;
}

Car.prototype.honk = function(){
    console.log(`${this.brand} - Honk.... Honk...`)
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);


function Aeroplane(brand, model, speed, fuelType, noOfWheels, noOfEngines, hasLandingGear){
    Vehicle.call(this, brand, model, speed, fuelType);

    this.noOfEngines = noOfEngines;
    this.hasLandingGear = hasLandingGear;
}

Car.prototype.takeOff = function(){
    console.log("Aeroplane is taking Off")
}

Object.setPrototypeOf(Aeroplane.prototype, Vehicle.prototype);


let car1 = new Car("Ferrari", 1999, 400, "Petrol", 4);
let Aero1 = new Car("Air Aisa", 2005, 1000, "Diesel", 8);

console.log(car1);
console.log(Aero1);
Aero1.honk();
car1.honk();
car1.refuel();
Aero1.refuel();


