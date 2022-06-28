class Car {
  constructor (brand, speed){
    this.brand = brand
    this.speed = speed
  }

  accelerate = (speedNum) => {
    this.speed += speedNum
  }

  brake = (breakNum) => {
    this.speed -= breakNum
  }

  describe = () => {
    console.log(`${this.brand} running at ${this.speed} km/h`)
  }
}

const ford = new Car("Ford", 0)
console.log(ford)
ford.describe()

ford.accelerate(50)
ford.describe()

ford.brake(25)
ford.describe()

const audi = new Car("Audi", 60)
console.log(audi)
audi.describe()

audi.accelerate(30)
audi.describe()

audi.brake(10)
audi.describe()