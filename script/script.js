let computerScore = 0;
let playerScore = 0; 

alert(
  "Welcome to Rock Paper Scissors! In a few seconds you will be asked to pick Rock, Paper or Scissors..."
);



const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = (arr) => {
  // gets random index
  const randomIndex = Math.floor(Math.random() * arr.length);

  //gets random item
  const item = arr[randomIndex];

  return item;
};

const getPlayerChoice = () => {

  let playerChoice = prompt(
    "Please enter a number for selection: 1 - ROCK. 2 - PAPER. 3 - SCISSORS."
  );

  while (!/^[1-3]+$/.test(playerChoice)) {
    alert(
      "Please only insert number from 1 - 3! 1 - ROCK. 2 - PAPER. 3 - SCISSORS"
    );
    playerChoice = prompt(
      "Please enter a number for selection: 1 - ROCK. 2 - PAPER. 3 - SCISSORS."
    );
  }

  if (playerChoice == 1) {
    playerChoice = "Rock";
  }
  if (playerChoice == 2) {
    playerChoice = "Paper";
  }
  if (playerChoice == 3) {
    playerChoice = "Scissors";
  }

  return playerChoice;
};


const playRound = (cpu, player) => {
  if (cpu === "Rock" && player === "Scissors") {
    computerScore += 1;
    return `CPU CHOICE: ${cpu}. PLAYER CHOICE: ${player}
        Rock Beats Scissors! CPU WINS!!`;
  }
  if (cpu === "Paper" && player === "Rock") {
    computerScore += 1;
    return `CPU CHOICE: ${cpu}. PLAYER CHOICE: ${player}
        Paper Beats Rock! CPU WINS!!`;
  }
  if (cpu === "Scissors" && player === "Paper") {
    computerScore += 1;
    return `CPU CHOICE: ${cpu}. PLAYER CHOICE: ${player}
        Scissors Beats Paper! CPU WINS!!`;
  }
  if (player === "Rock" && cpu === "Scissors") {
    playerScore += 1;
    return `CPU CHOICE: ${cpu}. PLAYER CHOICE: ${player}
        Rock Beats Scissors! YOU WIN!!`;
  }
  if (player === "Paper" && cpu === "Rock") {
    playerScore += 1;
    return `CPU CHOICE: ${cpu}. PLAYER CHOICE: ${player}
        Paper Beats Rock! YOU WIN!!`;
  }
  if (player === "Scissors" && cpu === "Paper") {
    playerScore += 1;
    return `CPU CHOICE: ${cpu}. PLAYER CHOICE: ${player}
        Scissors Beats Paper! YOU WIN!!`;
  }
  if (player == cpu) {
    return `CPU CHOICE: ${cpu}. PLAYER CHOICE: ${player}
    DRAW!`;
  }
};

const playGame = () => {
  return playRound(getPlayerChoice(), getComputerChoice(choices))
}

console.log(playGame())
