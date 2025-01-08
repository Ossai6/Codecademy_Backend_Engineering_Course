//ROCK PAPER SCISSORS
console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    console.log("Invalid input. Enter either Rock, Paper, or Scissors.")
  }
};
const getComputerChoice = () => {
const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);
return choices[randomIndex];
};

const determineWinner = (userChoice, ComputerChoice) => {
  if (userChoice === ComputerChoice) {
    return "The game was a Tie."
  }
  if (userChoice === "rock") {
    if (ComputerChoice === "paper") {
      return "Computer won."
    } else {
      return "You won."
    }
  }

  if (userChoice === "paper") {
    if (ComputerChoice === "scissors") {
      return "Computer won."
    } else if (ComputerChoice === "rock") {
      return "You won."
    }
  }

  if (userChoice === "scissors") {
    if (ComputerChoice === "paper") {
      return "You won."
    } else if (ComputerChoice === "rock") {
      return "Computer won."
    }
  } 
};

const playGame = () => {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}`);
  console.log(`Computer chose ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();