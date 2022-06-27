class Car {
  constructor (brand, speed){
    this.brand = brand
    this.speed = speed
  }

  accelerate(speedNum) {
    this.speed += speedNum
  }

  brake (breakNum){
    this.speed -= breakNum
  }

  describe (){
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





// execise 2

class TV {
  constructor(brand, channel = 1, volume = 50){
    this.brand = brand
    this.channel = channel
    this.volume = volume
  }

  volumeDown(){
    if((this.volume - 10) < 0){
      console.log("Sound Min")
    }else{
      this.volume -= 10
      console.log(`Sound ${this.volume}`)
    }
  }

  volumeUp(){
    if((this.volume + 10) > 100){
      console.log("Sound Max ")
    }else{
      this.volume += 10
      console.log(`Sound ${this.volume}`)
    }
  }

  channelUp(channelNum){
    if((this.channel + channelNum) > 50){
      console.log(`Channel ${this.channel}`)
    }else{
      this.channel += channelNum
      console.log(`Channel ${this.channel}`)
    }
  }

  channelDown(channelNum){
    if((this.channel - channelNum) < 0){
      console.log(`Channel ${this.channel}`)
    }else{
      this.channel -= channelNum
      console.log(`Channel ${this.channel}`)
    }
  }

  resetTv(){
    this.channel = 1
    this.volume = 50
    console.log(`TV has been reset : Channel - ${this.channel}, Volume - ${this.volume}`)
  }
}

const samsungTv = new TV("Samsung", 40)
console.log(samsungTv)

samsungTv.volumeDown()
samsungTv.volumeDown()

samsungTv.volumeUp()
samsungTv.volumeUp()
samsungTv.volumeUp()
samsungTv.volumeUp()

samsungTv.channelUp(5)
samsungTv.channelUp(10)

samsungTv.channelDown(5)
samsungTv.channelDown(10)

samsungTv.resetTv()
