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
    console.log(`You chose ${playerSelection} Computer chose ${computerSelection}!`)
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
    let result = "";
    for (let i = 0; i < 5; i++) {
        let gameResult = playRound();
        console.log(gameResult)
        if (gameResult === "You Win! :)") {
            win++;
            console.log(`Player ${win} Computer ${lose}`)
        } if (gameResult === "You Lose! :(") {
            lose++;
            console.log(`Player ${win} Computer ${lose}`)
        } if (gameResult === "It's a tie!") {
            console.log(`Player ${win} Computer ${lose}`)
        }
    } if (win > lose) {
        result = "Player Wins!";
    } if (lose > win) {
        result = "Computer Wins!";
    } if (win === lose) {
        result = "Tied!";
    } return result;
};


console.log(game());