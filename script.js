// Generate Computer Choice
function genComputerChoice() {
  rn = Math.random() * 3;
  if (rn >= 0 && rn < 1) {
    return 'rock'
  }
  else if (rn >= 1 && rn < 2) {
    return 'paper'
  }
  else if (rn >=2 && rn<3) {
    return 'scissors'
  }
  else {
    return 'Error'
  }
}

// Generate Winner (via Parameters)
function genWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tied';
  }
  else if (userChoice === 'rock' && computerChoice == 'paper') {
    return 'You Lost';
  }
  else if (userChoice === 'rock' && computerChoice == 'scissors') {
    return 'You Won';
  }
  else if (userChoice === 'paper' && computerChoice == 'rock') {
    return 'You Won';
  }
  else if (userChoice === 'paper' && computerChoice == 'scissors') {
    return 'You Lost';
  }
  else if (userChoice === 'scissors' && computerChoice == 'rock') {
    return 'You Lost';
  }
  else if (userChoice === 'scissors' && computerChoice == 'paper') {
    return 'You Won';
  }
  else {
    return 'Error';
  }
}