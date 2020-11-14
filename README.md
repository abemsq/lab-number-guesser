# Number Guesser

## Overview
This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

## Project Goals
In this project, you’ll write JavaScript functions to power a small guessing game. Your code will run in the browser instead of just the terminal, but you have an output section to help you test your functions and show you if you have syntax errors.

## Finished App Image
![App Image](https://github.com/abemsq/lab-number-guesser/blob/master/image.png)

## Game.js
```
let target;

const humanGuessInput = document.getElementById('human-guess');

const roundNumberDisplay = document.getElementById('round-number');

const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round')

guessButton.addEventListener('click', () => {
  // Generate the target value
  target = generateTarget();
  // Retrieve the player's guess
  const currentHumanGuess = humanGuessInput.value;
  // Make a random 'computer guess'
  const computerGuess = Math.floor(Math.random() * 10);

  // Display the computer guess and the target
  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;
  
  // Determine if the human or computer wins:
  const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)
  const winner = humanIsWinner ? 'human' : 'computer'

  // Update the correct score:
  updateScore(winner);

  // Display the winner
  if (humanIsWinner) {
    guessButton.innerText = 'You Win!!!!!';
    guessButton.classList.toggle('winning-text')
  } else {
    computerWinsDisplay.innerText = 'Computer Wins!!!';
  }

  // winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';

  // Display the current scores:
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  
  // Set the correct disabled state for the buttons
  guessButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
  // Increase the round number
  advanceRound();
  // Display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  // Reset the guess input box and the target number display:
  targetNumberDisplay.innerText = '?';
  guessButton.innerText = 'Make a Guess';
  humanGuessInput.value = '';
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  guessButton.classList.remove('winning-text');
});

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});

const handleValueChange = value => {
  if (value > 0 && value <= 9) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value > 9) {
    addButton.setAttribute('disabled', true);
  } else if (value <= 0) {
    subtractButton.setAttribute('disabled', true);
  }
}

humanGuessInput.addEventListener('input', function(e) {
  handleValueChange(e.target.value);
});
```

## Script.js
```
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
```

## HTML
```
<!doctype html>

<html>
  <head>
    <title>Number Guesser</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class="game-container">
      <header>
        <h1>Number Guesser!</h1>
      </header>
      
      <div class="rounds">
        <p class="round-label">Round <span id="round-number">1</span></p>
        <p class="guess-label">Target Number: <span id="target-number">?</span></p>
      </div>

      <div class="guessing-area">
        <div class="guess computer-guess">
          <div class="guess-title">
            <p class="guess-label">Computer</p>
            <p class="score-label">Score: <span id="computer-score">0</span></p>
          </div>
          <p id="computer-guess">?</p>
          <p class="winning-text" id="computer-wins"></p>
        </div>
        <div class="guess human-guess">
          <div class="guess-title">
            <p class="guess-label">You</p>
            <p class="score-label">Score: <span id="human-score">0</span></p>
          </div>
          <input type="number" id="human-guess" min=0 max=9 value=0>
          <div class="number-controls">
            <button class="number-control left" id="subtract" disabled>-</button>
            <button class="number-control right" id="add">+</button>
          </div>
          <button class="button" id="guess">Make a Guess</button>
        </div>
      </div>

      <div class="next-round-container">
        <button class="button" id="next-round" disabled>Next Round</button>
      </div>

    </div>
    
    <div class="instructions">
      <div class="instruction">
        <h3>Step 1</h3>
        <p>Input a number between 0 and 9</p>
      </div>
      <div class="instruction">
        <h3>Step 2</h3>
        <p>Click "Make a Guess" to submit your guess and see who won the round.</p>
      </div>
      <div class="instruction">
        <h3>Step 3</h3>
        <p>Click "Next Round" to play again.</p>
      </div>
    </div>

    <script src="./script.js"></script>
    <script src="./game.js"></script>
  </body>
</html>
```

## CSS
```
* {
    font-family: 'Nunito Sans';
    box-sizing: border-box;
  }
  
  body {
    margin: 0 auto;
    padding: 3px;
    background-color: #fff;
  }
  
  .game-container {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
  }
  
  header {
    display: flex;
    justify-content: center
  }
  
  .rounds {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .round-label {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 0px;
  }
  
  .guess {
    min-width: 303px;
    height: 328px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 19px;
  }
  
  .guessing-area {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-bottom: 60px;
  }
  
  .guess-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
  
  .guess-label {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  
  .score-label {
    font-size: 14px;
    font-weight: 700;
    margin: 0;
  }
  
  .target-guess {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  
  .computer-guess {
    background-color: #ececec;
  }
  
  #computer-guess {
    font-size: 50px;
    font-weight: 700;
    color: #a5a5a5;
  }
  
  .human-guess {
    border: 1px solid #979797;
  }
  
  .guess input {
    height: 90px;
    width: 90px;
    font-size: 30px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 7px;
  }
  
  .number-controls {
    font-size: 0;
    margin-bottom: 23px;
  }
  
  .number-control {
    border: solid 1px #4c7ef3;
    display: inline-block;
    width: 45px;
    height: 35px;
    font-size: 24px;
    font-weight: 700;
    color: #4c7ef3;
    cursor: pointer;
  }
  
  .number-controls button[disabled] {
    color: #dfdfdf;
    cursor: default;
  }
  
  .left {
    border-top-left-radius: 22.5px;
    border-bottom-left-radius: 22.5px;
  }
  
  .right {
    border-top-right-radius: 22.5px;
    border-bottom-right-radius: 22.5px;
    border-left-width: 0px;
  }
  
  .controls {
    display: flex;
    justify-content: space-around;
  }
  
  .button {
    background-color: #4c7ef3;
    color: #fff;
    cursor: pointer;
  }
  
  #guess {
    padding: 20px;
    width: 169px;
    height: 59px;
    border: none;
    font-weight: 700;
    font-size: 14px;
  }
  
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  
  #next-round {
    width: 179px;
    height: 64px;
    font-size: 18px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  }
    
  .button[disabled] {
    background-color: #d2d2d2;
    color: #a0a0a0;
    cursor: default;
  }
  
  .instructions {
    background-color: #ececec;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  
  .instruction {
    width: 180px;
    padding: 2px;
    text-align: center;
  }
  
  .instructions h3 {
    font-size: 14px;
  }
  
  
  .winning-text, .winning-text[disabled] {
    color: #ec3636;
    font-weight: 700;
  }
```
