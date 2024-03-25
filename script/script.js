let computerScore = 0;
let playerScore = 0; 


const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = (arr) => {
  // gets random index
  const randomIndex = Math.floor(Math.random() * arr.length);

  //gets random item
  const item = arr[randomIndex];

  return item;
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

console.log(playRound("Rock", getComputerChoice(choices)));
console.log(`Player Score: ${playerScore} - CPU Score: ${computerScore}`)
playRound("Paper", getComputerChoice(choices));

// const playGame = () => {
//   for (i = 1; i <= 5; i++) {
//     playRound(computerChoice, playerSelection);
//   }
// };

// playGame();
