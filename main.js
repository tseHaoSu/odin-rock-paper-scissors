document.addEventListener("DOMContentLoaded", () => {
  let humanScore = 0;
  let computerScore = 0;
  let result = "";
  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");
  const humanScoreElement = document.querySelector("#humanScore");
  const computerScoreElement = document.querySelector("#computerScore");
  const resultElement = document.querySelector("#result");

//Function to get the computer choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };

  //Function to determine the winner
  const determineWinner = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice) {
      return "It's a tie!";
    }
    if (computerChoice === "rock") {
      if (humanChoice === "paper") {
        humanScore++;
        return "You win!";
      } else {
        computerScore++;
        return "Computer wins!";
      }
    }
    if (computerChoice === "paper") {
      if (humanChoice === "scissors") {
        humanScore++;
        return "You win!";
      } else {
        computerScore++;
        return "Computer wins!";
      }
    }
    if (computerChoice === "scissors") {
      if (humanChoice === "rock") {
        humanScore++;
        return "You win!";
      } else {
        computerScore++;
        return "Computer wins!";
      }
    }
  };

  //Main logic to play the game
  const playGame = (humanChoice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(computerChoice, humanChoice);
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(result);
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
    resultElement.textContent = result;
  };
  rockButton.addEventListener("click", () => playGame("rock"));
  paperButton.addEventListener("click", () => playGame("paper"));
  scissorsButton.addEventListener("click", () => playGame("scissors"));
}); 
