// exercise jeu video

// The Cricket game
class Player{
  constructor(playerName, age, role){
    this.playerName = playerName
    this.age = age
    this.role = role
  }


  match(matchNum,opponetTeam, result){
    this.matchNum = matchNum
    this.opponetTeam = opponetTeam
    this.result = result
  }

  battingStats(){
    
  }



}


const shane = new Player("shane", 22, 'Batting All rounder')