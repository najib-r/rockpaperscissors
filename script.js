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

const div = document.getElementById("demo");

function round() {
    let computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) === 0) {       
        div.innerHTML += `You lose. ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        linebreak = document.createElement("br");
        div.appendChild(linebreak);
    }
    else if (playRound(playerSelection, computerSelection) === 1) {
        div.innerHTML += `Draw. ${playerSelection} and ${computerSelection}`;
        linebreak = document.createElement("br");
        div.appendChild(linebreak);
    }
    else if (playRound(playerSelection, computerSelection) === 2) {  
        div.innerHTML += `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        linebreak = document.createElement("br");
        div.appendChild(linebreak);
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            alert("You won by reaching 5 points! Points reset to 0.");
            div.innerHTML = "";
            playerScore = 0;
            computerScore = 0;
            refreshScore();
        }
        else {
            alert("Computer reached 5 points. You lose. Points reset to 0.");
            div.innerHTML = "";
            playerScore = 0;
            computerScore = 0;
            refreshScore();

        }
    }
}

const button1 = document.getElementById('Rock');

button1.addEventListener('click', myFunction);

function myFunction () {
    playerSelection = button1.textContent;
    round();
    refreshScore();
}

const button2 = document.getElementById('Paper');

button2.addEventListener('click', myFunction2);

function myFunction2 () {
    playerSelection = button2.textContent;
    round();
    refreshScore();
}

const button3 = document.getElementById('Scissors');

button3.addEventListener('click', myFunction3);

function myFunction3 () {
    playerSelection = button3.textContent;
    round();
    refreshScore();
}

function refreshScore () {
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}


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



