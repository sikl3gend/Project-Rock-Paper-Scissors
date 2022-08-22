function getComputerChoice(){
    const handChoices = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3 );
    return handChoices[randomInt];
}

function playRound(playerSelection, computerSelection){
    
    if (computerSelection === playerSelection){
        return `It's a tie`;
    }
    if (computerSelection === `ROCK` && playerSelection === `SCISSORS`){
        return `Computer Wins`;
    }
    if (computerSelection === `ROCK` && playerSelection === `PAPER`){
        return `You Win`;
    }
    if (computerSelection === `SCISSORS` && playerSelection === `PAPER`){
        return `Computer Wins`;
    }
    if (computerSelection === `SCISSORS` && playerSelection === `ROCK`){
        return `You Win`;
    }
    if (computerSelection === `PAPER` && playerSelection === `ROCK`){
        return `Computer Wins`;
    }
    if (computerSelection === `PAPER` && playerSelection === `SCISSORS`){
        return `You Win`;
    }      
}

function game() {
        let winCount = 0
        let loseCount = 0
        for (i = 0; i < 5; i++) {
            let playerPick = prompt("Rock, paper, or scissors?").toUpperCase();
            let computerPick = getComputerChoice().toUpperCase();
            playRound(playerPick, computerPick);
            if (playRound(playerPick, computerPick).charAt(1) === `Y`){
                winCount++;
            }
            else if (playRound(playerPick, computerPick).charAt(1) === `C`){
                loseCount++
            }
            else {
                winCount++
                loseCount++
            }
            console.log("Your pick is: " + playerPick +"." + " " + "Computer picked: " + computerPick + ".");
            console.log(playRound(playerPick, computerPick));
    }
    if (winCount > loseCount){
        return "You Win!"
    }
    else if (winCount > loseCount){
        return "You lose!"
    }
    else {
        return ("It's a tie!")
    }
}
let result = game()
console.log(result)