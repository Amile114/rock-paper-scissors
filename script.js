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
getComputerChoice();

