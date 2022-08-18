
function getComputerChoice(){
    const randomInt = Math.floor(Math.random() * 3 );
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

function playGame(computerSelection, playerSelection){
    computerSelection = getComputerChoice()
    playerSelection = getPlayerChoice()
    if (computerSelection == playerSelection){
        result = `It's a tie`;
    }
    if (computerSelection == `Rock` && playerSelection === `Scissors`){
        result = `Computer Wins`
    }
    if (computerSelection == `Rock` && playerSelection === `Paper`){
        result = `You win`
    }
    if (computerSelection == `Scissors` && playerSelection === `Paper`){
        result = `Computer Wins`
    }
    if (computerSelection == `Scissors` && playerSelection === `Rock`){
        result = `You Win`
    }
    if (computerSelection == `Paper` && playerSelection === `Rock`){
        result = `Computer Wins`
    }
    if (computerSelection == `Paper` && playerSelection === `Scissors`){
        result = `You win`
    }
    return result
        
}


console.log(playGame(computerSelection, playerSelection))