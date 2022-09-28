let playerScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

rock_div.addEventListener('click', () => {
    playRound('ROCK')
})

paper_div.addEventListener('click', () => {
    playRound('PAPER')
})

scissors_div.addEventListener('click', () => {
    playRound('SCISSORS')
})

function isDraw(playerSelection, computerSelection) {
    result_div.textContent = 'It\'s a tie!'  
    

}

function isWin(playerSelection) {
    playerScore++;
    userScore_span.textContent = playerScore;
    result_div.textContent = playerSelection + ' beats ' + computerSelection + '. You win!'  
}

function isLoss(playerSelection) {
    computerScore++
    computerScore_span.textContent = computerScore
    result_div.textContent = playerSelection + ' gets beat by ' + computerSelection + '. You lose!' 
}

    
function playRound(playerSelection){
    let outcome = ''
    computerSelection = getComputerChoice()
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection){
        isDraw(playerSelection, computerSelection)
        }
    else if ( playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        isWin(playerSelection, computerSelection)
        outcome = 'Player Wins'
        
        }
    else if ( playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        isWin(playerSelection, computerSelection)
        outcome = 'Player Wins'
        }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        isWin(playerSelection, computerSelection)
        outcome = 'Player Wins'
        }
    else {
        isLoss(playerSelection, computerSelection)
        outcome = 'Computer Wins'
        }
    
}

function getComputerChoice(){
    const handChoices = ["ROCK", "PAPER", "SCISSORS"];
    let randomInt = Math.floor(Math.random() * 3 );
    return handChoices[randomInt];
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






