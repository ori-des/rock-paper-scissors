const rockBtn = document.querySelector(`#rock`);
const paperBtn = document.querySelector(`#paper`);
const scissorsBtn = document.querySelector(`#scissors`);

rockBtn.addEventListener(`click`, () => playRound('rock'));
paperBtn.addEventListener(`click`, () => playRound('paper'));
scissorsBtn.addEventListener(`click`, () => playRound('scissors'));

const container = document.querySelector(`#container`);
const content = document.createElement(`p`);
content.classList.add(`content`);
content.textContent = "Hi :)";
container.appendChild(content);

let win = 0;
let lose = 0;

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
    let result = "";
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You Win! :)";
        win++;
    } if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You Win! :)";
        win++;
    } if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win! :)";
        win++;
    } if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You Lose! :(";
        lose++;
    } if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! :(";
        lose++;
    } if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! :(";
        lose++;
    }
    
    content.textContent = `You chose ${playerSelection} Computer chose ${computerSelection}! 
    ${result} Player ${win} - Computer ${lose}`;
    
    if (win === 5) {
        win = 0;
        lose = 0;
        content.textContent = "Player Wins!";
    } if (lose === 5) {
        win = 0;
        lose = 0;
        content.textContent = "Computer Wins!";
    } 
     
    
};