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

function getPlayerChoice() {
    let playerSelection = rock.id;
    return playerSelection;
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

function getAlert(e) {
    console.log(e.target.id)
    alert("!!!");
}

const rockBtn = document.querySelector(`#rock`);
const paperBtn = document.querySelector(`#paper`);
const scissorsBtn = document.querySelector(`#scissors`);

// paper.addEventListener(`click`, playRound);
// scissors.addEventListener(`click`, playRound);
rock.addEventListener(`click`, playRound);
paper.addEventListener(`click`, playRound);
scissors.addEventListener(`click`, playRound);