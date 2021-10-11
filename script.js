function computerPlay () {
    let computerChoice = Math.random();
    if (computerChoice <= 0.34) {
        return "Rock";
    }
    else if (computerChoice > 0.34 && computerChoice <= 0.67) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

