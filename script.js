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

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');



function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        alert("Insert Again!");
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
    }   return playerSelection;
};

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(`You chose ${playerSelection} Computer chose ${computerSelection}!`)
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! :)";
    } if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! :)";
    } if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! :)";
    } else {
        return "You Lose! :(";
    }
};

function playGame() {
    let win = 0;
    let lose = 0;
    let result = "";
    for (let game = 0; game < 5; game++) {
        let gameResult = playRound();
        console.log(gameResult);
        if (gameResult === "You Win! :)") {
            win++;
            console.log(`Player ${win} Computer ${lose}`);
        } if (gameResult === "You Lose! :(") {
            lose++;
            console.log(`Player ${win} Computer ${lose}`);
        } if (gameResult === "It's a tie!") {
            game--;
            console.log(`Player ${win} Computer ${lose}`);
        }
    } if (win > lose) {
        result = "Player Wins!";
    } if (lose > win) {
        result = "Computer Wins!";
    } return result;
};


console.log(playRound());