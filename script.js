function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const choices = ["Rock", "Paper", "Scissors"];  

function getComputerChoice () {

    number = getRandomInt(3);
    return choices[number];
}


function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                // lose
                return 0;
            }
            else if (computerSelection === "Rock") {
                // draw
                return 1;
            }
            else {
                // win
                return 2;
            }
            break;
        case "Scissors":
            if (computerSelection === "Paper") {
                // win
                return 2;
            }
            else if (computerSelection === "Scissors") {
                // draw
                return 1;
            }
            else {
                // lose
                return 0;
            }
            break;
        case "Paper":
            if (computerSelection === "Paper") {
                // draw
                return 1;
            }
            else if (computerSelection === "Rock") {
                // win
                return 2;
            }
            else {
                // lose
                return 0;
            }
            break;
    }
}



let playerScore = 0;
let computerScore = 0;

/*
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("R/P/S: ");
        playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase();
        let computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) === 0) {
            computerScore++;
            console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
        }
        else if (playRound(playerSelection, computerSelection) === 1) {
            console.log(`Draw. ${playerSelection} and ${computerSelection}`);
        }
        else if (playRound(playerSelection, computerSelection) === 2) {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
    }
    if (playerScore > computerScore) {
        console.log(`You won the Best of 5. Score: ${playerScore} - ${computerScore}`);
    } 
    else if (playerScore < computerScore) {
        console.log(`You lost the Best of 5. Score: ${playerScore} - ${computerScore}`);
    }
}

game();
*/ 

const button1 = document.getElementById('rock');

button1.addEventListener('click', myFunction);

function myFunction () {
    playerSelection = button1.textContent;
    getComputerChoice();
    console.log(playerSelection);
}

const button2 = document.getElementById('paper');

button2.addEventListener('click', myFunction2);

function myFunction2 () {
    playerSelection = button2.textContent;
    console.log(playerSelection);
}

const button3 = document.getElementById('scissors');

button3.addEventListener('click', myFunction3);

function myFunction3 () {
    playerSelection = button3.textContent;
    console.log(playerSelection);
}


var div = document.createElement('div');


/*
button1.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

*/