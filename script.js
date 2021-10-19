
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("paper"));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("scissors"));

const computerWeapon = document.querySelector('#computerWeapon');

const result = document.querySelector('#result');

const playerCounter = document.querySelector('#playerCounter');
let playerCounterNumber = 0;

const computerCounter = document.querySelector('#computerCounter');
let computerCounterNumber = 0;


function computerPlay() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "Rock";
    }
    else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function youWin() {
    result.textContent = "You win!";
    playerCounterNumber += 1;
    if (playerCounterNumber >= 5) {
        result.textContent = `You win the game!`;
        playerCounterNumber = 0;
        computerCounterNumber = 0;
    }
    playerCounter.textContent = `${playerCounterNumber} times.`;
    computerCounter.textContent = `${computerCounterNumber} times.`;
}

function youLoose() {
    result.textContent = "You loose!";
    computerCounterNumber += 1;
    if (computerCounterNumber >= 5) {
        result.textContent = `The machine wins the game, play again!`
        playerCounterNumber = 0;
        computerCounterNumber = 0;
    }
    playerCounter.textContent = `${playerCounterNumber} times.`;
    computerCounter.textContent = `${computerCounterNumber} times.`;
}

function playRound (playerChoice) {

    let computerChoice = computerPlay();
    computerWeapon.textContent = `The computer choose ${computerChoice}`;

    if (playerChoice == "rock" && computerChoice == "Paper" ||
        playerChoice == "paper" && computerChoice == "Scissors" ||
        playerChoice == "scissors" && computerChoice == "Rock") {
        youLoose();
    }
    else if (playerChoice == "rock" && computerChoice == "Scissors" ||
             playerChoice == "paper" && computerChoice == "Rock" ||
             playerChoice == "scissors" && computerChoice == "Paper") {
        youWin();
    }
    else {
        result.textContent = "No one won this battle!";
    }
}
