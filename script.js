function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const choices = ["Rock", "Paper", "Scissors"];  

function getComputerChoice () {

    number = getRandomInt(3);
    return choices[number];
}


function playRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(playerSelection.length - 1);
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                return "You Lose! Paper beats Rock";
            }
            else if (computerSelection === "Rock") {
                return "Draw!";
            }
            else {
                return "You Win! Rock beats Scissors";
            }
            break;
        case "Scissors":
            if (computerSelection === "Paper") {
                return "You Win! Scissors beats Paper";
            }
            else if (computerSelection === "Scissors") {
                return "Draw!";
            }
            else {
                return "You Lose! Rock beats Scissors";
            }
            break;
        case "Paper":
            if (computerSelection === "Paper") {
                return "Draw!";
            }
            else if (computerSelection === "Rock") {
                return "You Win! Paper beats Rock";
            }
            else {
                return "You Lose! Scissors beats Paper";
            }
            break;
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(`Player choice - ${playerSelection}`);
console.log(`Computer choice - ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));