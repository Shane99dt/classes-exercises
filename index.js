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
  }

  matches = [matchNum]

  match = (matchNum,opponetTeam, result) => {
    // this.matchNum = matchNum
    // this.opponetTeam = opponetTeam
    // this.result = result
    this.matchesPlayed += 1
    matches.push()

  }

  battingStats = (matchNum, runs, ballsFaced, status = false) => {
    this.runs += runs
    this.ballsFaced += ballsFaced
    if(status){
      this.notOuts += 1
    }
  }

  bowlingStats = (matchNum, wickets, oversBowled, maidens) => {
    this.wickets += wickets
    this.oversBowled += oversBowled
    this.maidens += maidens
  }

}


const shane = new Player("shane", 22, 'Batting All rounder')
console.log(shane)

shane.match(1, 'VSK', 'win')
shane.battingStats(1, 40, 35, true)
console.log(shane)
// shane.battingStats(2, 10, 45, false)

shane.match(2, 'CCSBB', 'win')
shane.battingStats(2, 30, 50, false)
console.log(shane)