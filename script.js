let playerScore = 0
let computerScore = 0



function getComputerChoice(){
    const handChoices = ["ROCK", "PAPER", "SCISSORS"];
    let randomInt = Math.floor(Math.random() * 3 );
    return handChoices[randomInt];
}

function playRound(playerSelection, computerSelection){
    let outcome = ''
    playerSelection = prompt('Choose rock, paper, or scissors').toUpperCase()
    computerSelection = getComputerChoice()
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS'){
        alert('Please check your spelling and try again!')
        playRound()
    }
    else if (playerSelection === computerSelection){
        outcome = 'Tie'
    }
    else if ( playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        outcome = 'Player Wins'
    }
    else if ( playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        outcome = 'Player Wins'
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        outcome = 'Player Wins'
    }
    else {
        outcome = 'Computer Wins'
    }
    return outcome
}

function game() {
    console.log('Best of 5!')
    for (let i = 0; i < 5; i++) {
        playRoundResult = playRound()
        if (playRoundResult[0] === 'P'){
            playerScore++
        }
        else if (playRoundResult[0] === 'C'){
            computerScore++
        }
        console.log(playerScore + "-" + computerScore)   
     }
     if(playerScore === computerScore){
        console.log('It\'s a tie!' )
     }
     else if ( playerScore > computerScore){
        console.log('Player Wins!')
     }
     else {
        console.log('Computer Wins!')
     }
}
game()





