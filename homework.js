class Transport {
  name;
  speed;
  capacity;
  constructor(name, speed, capacity) {
    this.name = name;
    this.speed = speed;
    this.capacity = capacity;
  }
  start() {
    return `mashina harakatni boshladi`;
  }
  stop() {
    return `mashina harakti to'xtadi`;
  }
}
const transort1 = new Transport("cmamro", "300km/h", 2);
// console.log(transort1.start());
// console.log(transort1.stop());
class Car extends Transport {
  fuelType;
  constructor(name, speed, capacity, fuelType) {
    super(name, speed, capacity);
    this.fuelType = fuelType;
  }
  driveMode(mode) {
    switch (mode) {
      case "sport":
        return `sport modega o'tdi`;
      case "eco":
        return `eco modega o'tdi`;

      case "comfort":
        return `comfort modega o'tdi`;

      default:
        return `xato modeni tanladingiz`;
    }
  }
}
// const car1 = new Car("porsche 911gtr 9S", "300km/h", 2, "oil");
// console.log(car1.driveMode("comfort"));
class Airplane extends Transport {
  altitude;
  constructor(name, speed, capacity, altitude) {
    super(name, speed, capacity);
    this.altitude = altitude;
  }
  fly() {
    return `pavoz boshlandi`;
  }
}
// const plane1 = new Airplane("boeing", "10000km/h", 200, "10000metres");
// console.log(plane1.fly());
class Ship extends Transport {
  cargoCapacity;
  constructor(name, speed, capacity, cargoCapacity) {
    super(name, speed, capacity);
    this.cargoCapacity = cargoCapacity;
  }
  soil() {
    return `kema suzishni boshladi`;
  }
}
const ship1 = new Ship("nmadur ", "100km/h", 100, "10000 tonnes");
console.log(ship1.soil());
