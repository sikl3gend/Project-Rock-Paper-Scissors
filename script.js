let computerSelection = ""
let playerSelection = ""
let result = ""
let playerScore = 0
let computerScore = 0



function getComputerChoice(){

    const randomInt = Math.floor(Math.random() * 3 );
    computerSelection = ""
    if (randomInt === 0){
        computerSelection = `Rock`
    }
    else if (randomInt === 1){
        computerSelection = `Paper`
    }
    else {
        computerSelection = `Scissors`
    }
    return computerSelection
}
console.log(getComputerChoice())

function getPlayerChoice (){
    
    const randomInt = Math.floor(Math.random() * 3 );
    playerSelection = ""
    if (randomInt === 0){
        playerSelection = `Rock`
    }
    else if (randomInt === 1){
        playerSelection = `Paper`
    }
    else {
        playerSelection = `Scissors`
    }
    return playerSelection
}
console.log(getPlayerChoice())

function playRound(computerSelection, playerSelection){
   
    if (computerSelection == playerSelection){
        result = `It's a tie`;
    }
    if (computerSelection === `Rock` && playerSelection === `Scissors`){
        result = `Computer Wins`
    }
    if (computerSelection === `Rock` && playerSelection === `Paper`){
        result = `You Win`
    }
    if (computerSelection === `Scissors` && playerSelection === `Paper`){
        result = `Computer Wins`
    }
    if (computerSelection === `Scissors` && playerSelection === `Rock`){
        result = `You Win`
    }
    if (computerSelection === `Paper` && playerSelection === `Rock`){
        result = `Computer Wins`
    }
    if (computerSelection === `Paper` && playerSelection === `Scissors`){
        result = `You Win`
    }
    return result       
}

console.log(playRound(computerSelection, playerSelection))

function scoreTracker () {
   
        for (i = 0; i < 5; i++) {
            if (result === `You Win`){
                playerScore++
            }
            else if (result === `Computer Wins`) {
                computerScore++
            }
            return playerScore + "-" + computerScore
        }
        }   

console.log(scoreTracker(result))
