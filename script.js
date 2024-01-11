function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "Rock";
    } if (number === 1) {
        return "Paper";
    } if (number === 2) {
        return "Scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
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

console.log(playRound());