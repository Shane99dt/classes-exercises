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
    this.notOuts = 0
    this.wickets = 0
    this.oversBowled = 0
    this.runsGiven = 0
    this.maidens = 0
  }

  match = (matchNum,opponetTeam, result) => {
    // this.matchNum = matchNum
    // this.opponetTeam = opponetTeam
    // this.result = result
    this.matchesPlayed += 1
  }

  battingStats = (matchNum, runs, ballsFaced, status = false) => {
    this.runs += runs
    this.ballsFaced += ballsFaced
    if(status){
      this.notOuts += 1
    }
  }

  bowlingStats = (matchNum, wickets, oversBowled, runsGiven, maidens) => {
    this.wickets += wickets
    this.oversBowled += oversBowled
    this.runsGiven += runsGiven
    this.maidens += maidens
  }
}

// class Batting extends Player {
//   constructor(playerName){
//     super(playerName)
//   }

//   battingStats = (matchNum, runs, ballsFaced, status = false) => {
//     this.runs += runs
//     this.ballsFaced += ballsFaced
//     if(status){
//       this.notOuts += 1
//     }
//   }
// }


const shane = new Player("shane", 22, 'Batting All rounder')
console.log(shane)

shane.match(1, 'VSK', 'win')
shane.battingStats(1, 40, 35, true)
shane.bowlingStats(1, 2, 4, 15, 1)
console.log(shane)
// shane.battingStats(2, 10, 45, false)

shane.match(2, 'CCSBB', 'win')
shane.battingStats(2, 30, 50, false)
shane.bowlingStats(1, 0, 4, 20, 1)
console.log(shane)

