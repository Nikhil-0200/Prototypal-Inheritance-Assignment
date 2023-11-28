"use strict";

function Vehcile(brand, model, speed, fuleType){
    this.brand = brand;
    this.model = model;
    this.speed = speed; 
    this.fuleType = fuleType;
}

function Car(brand, model, speed, fuleType, noOfDoor,){
    Vehcile.call(this, brand, model, speed, fuleType);

    this.noOfDoor = noOfDoor;
}


Object.setPrototypeOf(Car.prototype, Vehcile.prototype);


Car.prototype.roofTop = function(){
    console.log(`It has a ROOF TOP`);
};

Car.prototype.color = function(color){
    console.log(`Color of Car: ${color}`);
};

let car1 = new Car("BMW", 2023, "300 KM/H", "Petrol", 2);

console.log(car1);
car1.roofTop();
car1.color("red");