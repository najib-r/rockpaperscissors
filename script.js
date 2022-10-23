function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const choices = ["rock", "paper", "scissors"];  

function getComputerChoice () {

    number = getRandomInt(3);
    return choices[number];
}

console.log(getComputerChoice());