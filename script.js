
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("paper"));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("scissors"));

const computerWeapon = document.querySelector('#computerWeapon');

const result = document.querySelector('#result');

const playerCounter = document.querySelector('#counter1 p');
let playerCounterNumber = 0;
playerCounter.textContent = `${playerCounterNumber} times.`;

const computerCounter = document.querySelector('#counter2 p');
let computerCounterNumber = 0;
computerCounter.textContent = `${computerCounterNumber} times.`;


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
    result.textContent = "You win the battle!";
    playerCounterNumber += 1;
    playerCounter.textContent = `${playerCounterNumber} times.`;
    if (playerCounterNumber >= 5) {
        playerCounterNumber = 0;
        computerCounterNumber = 0;
        result.textContent = `You have won the war!`;
    }
}

function youLoose() {
    result.textContent = "You loose the battle!";
    computerCounterNumber += 1;
    computerCounter.textContent = `${computerCounterNumber} times.`
    if (computerCounterNumber >= 5) {
        playerCounterNumber = 0;
        computerCounterNumber = 0;
        result.textContent = `The machine has won the war, fight again!`
    }
}

function playRound (playerChoice) {

    let computerChoice = computerPlay();
    computerWeapon.textContent = `The computer choose ${computerChoice}`;

    if (playerChoice == "rock" && computerChoice == "Paper") {
        youLoose();
    }
    else if (playerChoice == "rock" && computerChoice == "Scissors") {
        youWin();
    }
    else if (playerChoice == "paper" && computerChoice == "Scissors") {
        youLoose();
    }
    else if (playerChoice == "paper" && computerChoice == "Rock") {
        youWin();
    }
    else if (playerChoice == "scissors" && computerChoice == "Rock") {
        youLoose();
    }
    else if (playerChoice == "scissors" && computerChoice == "Paper") {
        youWin();
    }
    else {
        result.textContent = "No one won this battle!";
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