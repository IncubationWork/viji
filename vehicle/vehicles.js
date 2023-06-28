class Vehicles{
  constructor(id,type,brand,model){
    this.id = id;
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.speed = 0;

  }
  setAcceleration(speedchange){
    this.speed += speedchange;
    console.log(`${this.brand} ${this.model} ${this.type} accelerated to ${this.speed} km/h.`);
  }
  setBrake(speedchange){
    this.speed -=speedchange;
    if(this.speed <0){
        this.speed = 0;
    }
    console.log(`${this.brand} ${this.model} ${this.type}  brake to ${this.speed} km/h.`);
  }
  setDescription() {
    return `This is a ${this.brand} ${this.model} ${this.type}.`;
  }
}
class Bike extends Vehicles{
  constructor(id,type,brand,model){
    super(id,type,brand,model)
  }

}
class Car extends Vehicles{
  constructor(id,type,brand,model){
    super(id,type,brand,model)
  }
}
class Bus extends Vehicles{
  constructor(id,type,brand,model){
    super(id,type,brand,model)
  }
} 

let car = new Vehicles (1,"car","Ford","Fiesta",20);
let bike = new Vehicles (2,"bike","Yamaha","R15 V4",30);
let bus = new Vehicles (3,'single_decker_bus',"volvo",9600,50);

bike.setAcceleration(50);
bike.setBrake(10);
bike.setDescription();

car.setAcceleration(80);
car.setBrake(20);
car.setDescription();

bus.setAcceleration(60);
bus.setBrake(15);
bus.setDescription();

bike.setAcceleration(20);