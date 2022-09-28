let score = [0, 0];
const scoreText = document.querySelector(".score");
const roundInfoText = document.querySelector(".round-info");
console.log(roundInfoText);
const buttons = document.querySelectorAll(".selection-button");

buttons.forEach(b => {
    b.addEventListener("click", () => {
        playRound(b.getAttribute("data-selection"), getComputerChoice());
    });
});

function getPlayerChoice() {
    let choice;

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Choose rock, paper or scissors.");
        choice = choice.toLowerCase().replace(/\s+/g, "");
    }

    return choice;
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 9) % 3) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        printRoundWinner(2, playerSelection, computerSelection);
        updateScore(2);
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        printRoundWinner(0, playerSelection, computerSelection);
        updateScore(0);
    }
    else {
        printRoundWinner(1, playerSelection, computerSelection);
        updateScore(1);
    }
}

function printRoundWinner(winner, playerSelection, computerSelection) {
    if (winner === 0) {
        roundInfoText.textContent =
            `You win this round! 
            ${playerSelection} beats ${computerSelection}!`;
    } else if (winner === 1) {
        roundInfoText.textContent =
            `You lose this round... 
            ${computerSelection} beats ${playerSelection}.`;
    } else {
        roundInfoText.textContent =
            `It's a tie you both chose ${playerSelection}!`;
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        let roundWinner = playRound(getPlayerChoice(), getComputerChoice());

        if (roundWinner === 2) {
            i--;
        } else {

            console.log(i);
        }
    }
}

function updateScore(roundWinner) {
    score[roundWinner]++;

    scoreText.textContent = `${score[0]} | ${score[1]}`

    if (score[0] === 5 || score[1] === 5) {
        console.log(endGame(0, score));
    }
}

function endGame(gameWinner, score) {
    score[0] = 0;
    score[1] = 0;
    scoreText.textContent = `${score[0]} | ${score[1]}`

    if ((gameWinner === 0)) {
        roundInfoText.textContent =
            `You won ${score[0]} | ${score[1]}, congrats!`;
    }

    roundInfoText.textContent =
        `You lost ${score[1]} | ${score[0]}, try again!`;
}
