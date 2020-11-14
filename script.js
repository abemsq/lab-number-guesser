let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  Math.floor(Math.random() * 10)
};

const compareGuesses = (user, computer, secret) => {
  if (
    (Math.abs(target - user) <= Math.abs(target - computer)
    ) || 
    (Math.abs(target - user) === Math.abs(target - computer))) {
    return human
    console.log('User won the game!')
  } else {
    return computer
    console.log('Computer won the game!')
  }
};

const updateScore = (winner) => {
  if ('User won the game!') {
    humanScore + 1;
  } else {
    computerScore + 1;
  }
};

const advanceRound = () => {
  currentRoundNumber + 1;
}