// exercise jeu video

// The Cricket game
class Player{
  constructor(playerName, age, role){
    this.playerName = playerName
    this.age = age
    this.role = role
    this.matchesPlayed = 0
    this.runs = 0
    this.ballsFaced = 0
  }


  match(matchNum,opponetTeam, result){
    // this.matchNum = matchNum
    // this.opponetTeam = opponetTeam
    // this.result = result
    this.matchesPlayed += 1
  }

  battingStats(matchNum, runs, ballsFaced, status){
    this.runs += runs
    this.ballsFaced += ballsFaced
    // this.status = status
  }

}


const shane = new Player("shane", 22, 'Batting All rounder')
console.log(shane)

shane.match(1, 'VSK', 'win')
shane.battingStats(1, 40, 35, false)
console.log(shane)
shane.battingStats(2, 10, 45, false)
console.log(shane)