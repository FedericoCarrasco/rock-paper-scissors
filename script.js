function computerPlay () {
    let randomNumber = Math.random();
    if (randomNumber <= 0.34) {
        return "Rock";
    }
    else if (randomNumber > 0.34 && randomNumber <= 0.67) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound (playerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerPlay();

    console.log(`The computer choose ${computerChoice}`);

    if (playerChoice == "rock" && computerChoice == "Paper") {
        return "Paper beats Rock, you loose!";
    }
    else if (playerChoice == "rock" && computerChoice == "Scissors") {
        return "Rock beats Scissors, you win!";
    }
    else if (playerChoice == "paper" && computerChoice == "Scissors") {
        return "Scissors beats Paper, you loose!";
    }
    else if (playerChoice == "paper" && computerChoice == "Rock") {
        return "Paper beats Rock, you win!";
    }
    else if (playerChoice == "scissors" && computerChoice == "Rock") {
        return "Rock beats Scissors, you loose!";
    }
    else if (playerChoice == "scissors" && computerChoice == "Paper") {
        return "Scissors beats Paper, you win!";
    }
    else if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors") {
        return "To play pick rock, paper or scissors";
    }
    else {
        return "It's a tie!";
    }

}