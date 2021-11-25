
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor((Math.random() * 3) + 0)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "DRAW";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats rock!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors!";
    } else {
        return "invalid entry!";
    }
}

function game() {
    // Representation of 3 rounds
    for(let i = 1; i < 4; i++) {
        const computerSelection = computerPlay(); 
        // This part now working - debug.
        const playerSelection = document.prompt("Enter Your Move");

        // Consider prompting user with results instead of logging in the console!
        console.log("Round: " + i);
        console.log(playRound(playerSelection, computerSelection));
    }
}