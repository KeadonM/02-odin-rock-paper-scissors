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

function getRoundWinner(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  }

  return `You lose... ${computerSelection} beats ${playerSelection}.`;
}
