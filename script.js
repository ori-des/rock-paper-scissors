function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return "Rock";
    } if (number === 1) {
        return "Paper";
    } if (number === 2) {
        return "Scissors";
    }
}


const playerSelection = prompt("Rock, Paper or Scissors?")
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playerSelection)

function playRound(playerSelection, computerSelection) {

}

console.log(getComputerChoice())

