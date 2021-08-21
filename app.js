// Game values
let min = 1,
  max = 10,
  winningNum = getRandNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again Event
game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-agnin') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over, you lost! ${winningNum} is the correct number`
      );
    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct! ${guessesLeft} guess left`, 'red');
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = 'Paly Again';
  guessBtn.className += 'play-agnin';
}
