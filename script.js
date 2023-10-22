function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 4);

  if (randomChoice === 0) {
    console.log('rock')
  }else if (randomChoice === 1) {
    console.log('paper')
  }else if (randomChoice === 2) {
    console.log('scissor')
  }
  
}
// getComputerChoice();

// playRound FUNCTION

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === 'rock' && computerSelection === 'scissor') {
    console.log('Player WINS! Rock beats Scissor');
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('Player wins, Paper beats Rock')
  }
  else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    console.log('Player wins, scissor beats paper')
  }
  else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    console.log('computer wins, rock beats scissor')
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('Computer Wins, Paper beats rock')
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    console.log('Computer Wins, Scissor beats paper')
  }
  else {
    console.log('Try again!')
  }
  
};

// playRound('rock', 'paper');

// GAME FUNCTION
function game() {
  for (let i = 0; i < 1; i++) {
    console.log(playRound('Scissor', 'Paper'))
  }
}
game()