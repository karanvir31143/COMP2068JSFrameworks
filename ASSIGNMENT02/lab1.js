
const prompt = require('prompt');


prompt.start();

//function for selecting any option-
function getComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "PAPER";
    } else if (randomNumber < 0.67) {
        return "SCISSORS";
    } else {
        return "ROCK";
    }
}


function determineWinner(userSelection, computerSelection) {
    if (
        (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (userSelection === "PAPER" && computerSelection === "ROCK") ||
        (userSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        return "User Wins";
    }
    else if (userSelection === computerSelection) {
        return "It's a tie";
    } else {
        return "Computer Wins";
    }
}


prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    
    const userSelection = result.userSelection.toUpperCase();
    
   
    if (["ROCK", "PAPER", "SCISSORS"].includes(userSelection)) {
        const computerSelection = getComputerSelection();
        console.log("User Selection:", userSelection);
        console.log("Computer Selection:", computerSelection);
        console.log("Outcome:", determineWinner(userSelection, computerSelection));
    } else {
        console.log("Incorrect selection. Please choose ROCK, PAPER, or SCISSORS.");
    }
});

//function to handle error
function onErr(err) {
    console.log(err);
    return 1;
}