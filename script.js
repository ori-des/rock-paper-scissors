function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return "Rock";
    } if (number === 1) {
        return "Paper";
    } if (number === 2) {
        return "Scissors";
    }
};

function playRound(playerSelection, computerSelection) {
   playerSelection = prompt("Rock, Paper or Scissors?")
   computerSelection = getComputerChoice();
   if (playerSelection.toLowerCase() == computerSelection.toLowerCase() ) {
    return "It's a tie!";
   } 
};

console.log(getComputerChoice());
console.log(playRound());