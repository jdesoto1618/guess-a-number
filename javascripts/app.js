var tries = 3;
let rand = randomNumber(10);
let remainingTries = document.querySelector('#tries').innerHTML = 3;

function randomNumber(highValue){
  let rand = Math.floor(Math.random()*(highValue + 1));
  return rand;
}

function decrease() {
  tries--;
  let attempts = document.querySelector('#tries');
  attempts.innerHTML = tries;
}

function getGuess() {
  let userGuess = document.querySelector('#numInput');
  return userGuess.value;
}

function validateGuess() {
  let userGuess = parseInt(getGuess());
  if(isNaN(userGuess) || userGuess < 0) {
    return false
  } else {
    return true;
  }
}

function hiLow() {
  let userGuess = parseInt(getGuess());
  let submitButton = document.querySelector('#button');
  let victoryBox = document.querySelector('.victory-notification');
  let resultText = document.querySelector('#result');
  let titleDiv = document.querySelector('.title');
  let contentDiv = document.querySelector('.content-container');

  if(rand == userGuess) {
    resultText.innerHTML = `Winner!`;
    submitButton.disabled = true;
    victoryBox.classList.add('show-victory-notification');
    titleDiv.classList.add('gray-overlay');
    contentDiv.classList.add('gray-overlay');
    return
  } else if (rand < userGuess) {
    document.getElementById("result").innerHTML = "You guessed too high!"
  } else if (rand > userGuess) {
    document.getElementById("result").innerHTML = "Your guess was too low..."
  }

  if (tries == 0){
    let resultText = document.querySelector('#result');
    resultText.innerHTML = `You lose! The correct number was ${rand}`;
    submitButton.disabled = true;
  }
}

function getTriesText() {
  let remainingTries = document.querySelector('#tries');
  return remainingTries;
}

function getButtons() {
  let submitButton = document.querySelector('#button');
  let reloadButton = document.querySelector('.reload');
  let closeVictoryButton = document.querySelector('.close-button');
  return [submitButton, reloadButton, closeVictoryButton];
}

getButtons()[1].addEventListener('click', function() {
  window.location.reload();
});

getButtons()[0].addEventListener('click', function() {
  let resultText = document.querySelector('#result');
  let userGuess = document.querySelector('#numInput');
  if(validateGuess() == false){
    resultText.innerHTML = `Please use whole, positive numbers.`;
    userGuess.value = ``;
    return false;
  } else {
    decrease();
    hiLow();
  }
});

getButtons()[2].addEventListener('click', function(){
  let victoryBox = document.querySelector('.victory-notification');
  let titleDiv = document.querySelector('.title');
  let contentDiv = document.querySelector('.content-container');
  victoryBox.classList.remove('show-victory-notification');
  titleDiv.classList.remove('gray-overlay');
  contentDiv.classList.remove('gray-overlay');
});

document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  let victoryBox = document.querySelector('.victory-notification');
  let titleDiv = document.querySelector('.title');
  let contentDiv = document.querySelector('.content-container');

  if (keyCode === 27) {
    victoryBox.classList.remove('show-victory-notification');
    titleDiv.classList.remove('gray-overlay');
    contentDiv.classList.remove('gray-overlay');
  }
});
