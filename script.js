function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    } if (number === 1) {
        return "paper";
    } if (number === 2) {
        return "scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! :)";
    } if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! :)"
    } if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! :)"
    } else {
        return "You Lose! :("
    }
};

function game() {
    let win = 0;
    let lose = 0;
    let tie = 0;
    for (let i = 0; i < 6; i++) {
        let gameResult = playRound();
        console.log(gameResult)
        if (gameResult === "You Win! :)") {
            win++;
        }
    } return win;
};


console.log(game());