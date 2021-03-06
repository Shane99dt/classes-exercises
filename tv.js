// execise 2

class TV {
  constructor(brand, channel = 1, volume = 50){
    this.brand = brand
    this.channel = channel
    this.volume = volume
  }

  volumeDown = () => {
    if((this.volume - 10) < 0){
      console.log("Sound Min")
    }else{
      this.volume -= 10
      console.log(`Sound ${this.volume}`)
    }
  }

  volumeUp = () => {
    if((this.volume + 10) > 100){
      console.log("Sound Max ")
    }else{
      this.volume += 10
      console.log(`Sound ${this.volume}`)
    }
  }

  // channelUp = (channelNum) => {
  //   if((this.channel + channelNum) > 50){
  //     console.log(`Channel ${this.channel}`)
  //   }else{
  //     this.channel += channelNum
  //     console.log(`Channel ${this.channel}`)
  //   }
  // }

  // channelDown =(channelNum) => {
  //   if((this.channel - channelNum) < 0){
  //     console.log(`Channel ${this.channel}`)
  //   }else{
  //     this.channel -= channelNum
  //     console.log(`Channel ${this.channel}`)
  //   }
  // }

  changeChannel = (channelNum) => {
    if(channelNum >= 1 && channelNum <= 50){
      this.channel = channelNum
      console.log(`Channel ${this.channel}`)
    }
  }

  describe = () => {
    console.log(`TV : ${this.brand} | Channel : ${this.channel} | Volume : ${this.volume}`)
  }

  resetTv = () => {
    this.channel = 1
    this.volume = 50
    console.log(`TV has been reset - Channel : ${this.channel}, Volume : ${this.volume}`)
  }
}

const samsungTv = new TV("Samsung", 20)
console.log(samsungTv)

samsungTv.volumeDown()
samsungTv.volumeDown()

samsungTv.volumeUp()
samsungTv.volumeUp()
samsungTv.volumeUp()
samsungTv.volumeUp()

// samsungTv.channelUp(5)
// samsungTv.channelUp(10)

// samsungTv.channelDown(5)
// samsungTv.channelDown(10)

samsungTv.changeChannel(10)
samsungTv.changeChannel(51)
samsungTv.changeChannel(1)
samsungTv.changeChannel(1)



samsungTv.describe()
samsungTv.resetTv()