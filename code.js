function getPlayerChoice() {
  let choice;

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Choose rock, paper or scissors.");
    choice = choice.toLowerCase();
    choice = choice.replace(/\s+/g, "");
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

    return 2;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    printRoundWinner(0, playerSelection, computerSelection);
    return 0;
  }

  printRoundWinner(1, playerSelection, computerSelection);
  return 1;
}

function printRoundWinner(winner, playerSelection, computerSelection) {
  if (winner === 0) {
    console.log(
      `You win this round! ${playerSelection} beats ${computerSelection}!`
    );
  } else if (winner === 1) {
    console.log(
      `You lose this round... ${computerSelection} beats ${playerSelection}.`
    );
  } else {
    console.log(`It's a tie you both chose ${playerSelection}!`);
  }
}

function playGame() {
  let score = [0, 0];
  for (i = 0; i < 5; i++) {
    roundWinner = playRound(getPlayerChoice(), getComputerChoice());

    if (roundWinner === 2) {
      i--;
    } else {
      score[roundWinner]++;

      if (score[0] === 3) {
        console.log(endGame(0, score));
        break;
      } else if (score[1] === 3) {
        console.log(endGame(1, score));
        break;
      }
    }
  }
}

function endGame(gameWinner, score) {
  if ((gameWinner = 0)) {
    return `You won ${score[0]} - ${score[1]}, congrats!`;
  }

  return `You lost ${score[1]} - ${score[0]}, try again!`;
}
