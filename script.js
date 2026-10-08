let rounds = 1;
let playerScore = 0;
let machineScore = 0;

const choices = ["rock", "paper", "scissors"];

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playRound(rounds) {
    if (playerScore === 5) {
        console.log("Congratulations! You won the game!");
        rl.close();
        return;
    } else if (machineScore === 5) {
        console.log("Machine won the game! Better luck next time.");
        rl.close();
        return;
    }

    let random = Math.floor(Math.random() * choices.length);
    let playerChoice = 0;
    let machineChoice = choices[random];
    
    console.log(`Round ${rounds}:`);

    rl.question("Choose the options: \n1. Rock\n2. Paper\n3. Scissors\n", (answer) => {
        playerChoice = parseInt(answer);

            if (playerChoice === 1) {
                console.log(`\nRock vs ${machineChoice}`);
            } else if (playerChoice === 2) {
                console.log(`\nPaper vs ${machineChoice}`);
            } else if (playerChoice === 3) {
                console.log(`\nScissors vs ${machineChoice}`);
            } else {
                console.log("\nInvalid choice. Please choose 1, 2, or 3.\n");
                playRound(rounds);
                return;
            }

            if (playerChoice === 1 && machineChoice === "scissors") {
                    playerScore++;
                    console.log("You win this round!\n");
                } else if (playerChoice === 2 && machineChoice === "rock") {
                    playerScore++;
                    console.log("You win this round!\n");
                } else if (playerChoice === 3 && machineChoice === "paper") {
                    playerScore++;
                    console.log("You win this round!\n");
                } else if (playerChoice === 1 && machineChoice === "rock") {
                    console.log("It's a tie!\n");
                } else if (playerChoice === 2 && machineChoice === "paper") {
                    console.log("It's a tie!\n");
                } else if (playerChoice === 3 && machineChoice === "scissors") {
                    console.log("It's a tie!\n");
                } else {
                    machineScore++;
                    console.log("Machine wins this round!\n");
                }

        playRound(rounds + 1);
            }
    )

}

playRound(rounds);