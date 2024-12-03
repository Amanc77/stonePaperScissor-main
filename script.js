const btnEle = document.querySelectorAll(".btns button");
const userScoreEle = document.getElementById("user-score");
const compScoreEle = document.getElementById("comp-score");
const resultEle = document.getElementById("result");
const newGameBtn = document.getElementById("new-game");
const newGameContainer = document.getElementById("new-game-container");

let userScore = 0;
let compScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;
let isTwoPlayer = false;

btnEle.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (roundsPlayed < maxRounds) {
      const playerChoice = btn.id;
      const opponentChoice = isTwoPlayer ? playerTwoChoice() : compChoice();
      const result = playRound(playerChoice, opponentChoice);
      resultEle.textContent = result;
      roundsPlayed++;

      if (roundsPlayed === maxRounds) {
        displayFinalResult();
      }
    }
  });
});

newGameBtn.addEventListener("click", () => {
  startNewGame();
});

function compChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerTwoChoice() {
  return prompt("Player 2, choose rock, paper, or scissor:").toLowerCase();
}


function playRound(playerChoice, opponentChoice) {
  if (playerChoice === opponentChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && opponentChoice === "scissor") ||
    (playerChoice === "paper" && opponentChoice === "rock") ||
    (playerChoice === "scissor" && opponentChoice === "paper")
  ) {
    userScore++;
    userScoreEle.textContent = userScore;
    return `You won! ${playerChoice} beats ${opponentChoice}`;
  } else {
    compScore++;
    compScoreEle.textContent = compScore;
    return `You lose! ${opponentChoice} beats ${playerChoice}`;
  }
}

function displayFinalResult() {
  let grade;
  if (userScore > compScore) {
    grade = "Excellent! You are the champion!";
  } else if (userScore === compScore) {
    grade = "Good effort! It's a tie.";
  } else {
    grade = "Try again! The opponent wins.";
  }

  resultEle.textContent = `Game Over! ${grade} Final Score - Player 1: ${userScore}, Opponent: ${compScore}`;
  disableButtons();
  newGameContainer.style.display = "block"; // Show new game button
}

function disableButtons() {
  btnEle.forEach((btn) => {
    btn.disabled = true;
  });
}

// Start a new game
function startNewGame() {
  userScore = 0;
  compScore = 0;
  roundsPlayed = 0;
  userScoreEle.textContent = userScore;
  compScoreEle.textContent = compScore;
  resultEle.textContent = "Result...";
  btnEle.forEach((btn) => (btn.disabled = false));
  newGameContainer.style.display = "none";
}

function toggleTwoPlayerMode() {
  isTwoPlayer = !isTwoPlayer;
}
