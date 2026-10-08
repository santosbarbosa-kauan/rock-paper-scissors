let playerScore = 0;
let machineScore = 0;
let round = 1;
let playerChoice = "";
let machineChoice = "";

const scoreElement = document.getElementById("score");
const roundElement = document.getElementById("round");
const gameElement = document.getElementById("game");
const choice = document.querySelectorAll(".choice");
const messageElement = document.getElementById("message");
const titleElement = document.getElementById("title");
const playagainElement = document.getElementById("playagain");

function getMachineChoice() {
    const choices = ["🪨", "📄", "✂️"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getPlayerChoice() {
    choice.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            playerChoice = event.currentTarget.id;
            machineChoice = getMachineChoice();
            gameElement.textContent = `${playerChoice} VS ${machineChoice}`;

            playRound();

            roundElement.textContent = `Round: ${round - 1}`;
            scoreElement.textContent = `Player: ${playerScore}     Machine: ${machineScore}`;
        });
    });
}

function playRound() {
    if (playerChoice === machineChoice) {
        round++;
        messageElement.textContent = "It's a tie!";
        return;
    } else if (playerChoice === "🪨" && machineChoice === "✂️") {
        playerScore++;
        messageElement.textContent = "You win this round!";
        round++;
    } else if (playerChoice === "📄" && machineChoice === "🪨") {
        playerScore++;
        messageElement.textContent = "You win this round!";
        round++;
    } else if (playerChoice === "✂️" && machineChoice === "📄") {
        playerScore++;
        messageElement.textContent = "You win this round!";
        round++;
    } else {
        machineScore++;
        messageElement.textContent = "Machine wins this round!";
        round++;
    }
}

getPlayerChoice();