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

function playRound () {
    let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    let computerChoice = computerPlay();

    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        return "To play pick rock, paper or scissors";
    }

    console.log(`The computer choose ${computerChoice}`);

    if (playerChoice == "rock" && computerChoice == "Paper") {
        return "You loose!";
    }
    else if (playerChoice == "rock" && computerChoice == "Scissors") {
        return "You win!";
    }
    else if (playerChoice == "paper" && computerChoice == "Scissors") {
        return "You loose!";
    }
    else if (playerChoice == "paper" && computerChoice == "Rock") {
        return "You win!";
    }
    else if (playerChoice == "scissors" && computerChoice == "Rock") {
        return "You loose!";
    }
    else if (playerChoice == "scissors" && computerChoice == "Paper") {
        return "You win!";
    }
    else {
        return "It's a tie!";
    }
}

function game () {
    let counter = 0;
    let roundResult = "";

    for (let i = 0; i < 5; i++) {

        roundResult = playRound();
        console.log(roundResult);

        if (roundResult == "You loose!") {
            counter--;
        }
        else if (roundResult == "You win!") {
            counter++;
        }
    }

    if (counter < 0) {
        return "Game over, you loose";
    }
    else if (counter > 0) {
        return "Game over, you win!";
    }
    else {
        return "Game over, it's a tie!"
    }
}