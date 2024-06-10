//Gallows part
let gallows_part = document.createElement('div');
gallows_part.className = "gallows_part";
document.body.appendChild(gallows_part);

let line1 = document.createElement('div');
line1.className = "line1";
let line2 = document.createElement('div');
line2.className = "line2";
let line3 = document.createElement('div');
line3.className = "line3";
let line4 = document.createElement('div');
line4.className = "line4";
let line5 = document.createElement('div');
line5.className = "line5";
let nameGame = document.createElement('h1');
nameGame.className = "name_game";
nameGame.textContent = "HANGMAN GAME";
gallows_part.appendChild(line1);
gallows_part.appendChild(line2);
gallows_part.appendChild(line3);
gallows_part.appendChild(line4);
gallows_part.appendChild(line5);
gallows_part.appendChild(nameGame);

//Man
let man = document.createElement('div');
man.className = "man";
gallows_part.appendChild(man);

let head = document.createElement('div');
head.className = "head";
let body = document.createElement('div');
body.className = "body";
let left_hand = document.createElement('div');
left_hand.className = "left_hand";
let right_hand = document.createElement('div');
right_hand.className = "right_hand";
let left_foot = document.createElement('div');
left_foot.className = "left_foot";
let right_foot = document.createElement('div');
right_foot.className = "right_foot";

man.appendChild(head);
man.appendChild(body);
man.appendChild(left_hand);
man.appendChild(right_hand);
man.appendChild(left_foot);
man.appendChild(right_foot);

//Quiz part
let quiz_part = document.createElement('div');
quiz_part.className = "quiz_part";
document.body.appendChild(quiz_part);

//Answer
let answers = [
  "helicopter",
  "cat",
  "fish",
  "mathematics",
  "voleyball",
  "pasta",
  "tea",
  "poland",
  "rose",
  "blue"
];

/// Questions
let questions = [
  "Flies in the sky.",
  "A four-legged animal.",
  "Has scales and lives in water.",
  "Subject at school",
  "Game with a ball",
  "Italian food",
  "Hot drink",
  "European country",
  "Red flower",
  "Color"
];

// Create elements for answer and question
let answer = document.createElement('div');
answer.className = "answer";
quiz_part.appendChild(answer);

// Set a random question
let question = document.createElement('span');
question.className = "question";
quiz_part.appendChild(question);

// Set a random question and update answers
let randomPair = getRandomQuestion();
question.textContent = "Hint: " + randomPair.question;
updateAnswers(randomPair.answer);

// Function to update answers
function updateAnswers(text) {
  answer.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    let letterSpan = document.createElement('span');
    letterSpan.textContent = text[i];
    answer.appendChild(letterSpan);
  }
}

// Function to get a random question
function getRandomQuestion() {
  let randomIndex = Math.floor(Math.random() * questions.length);
  return {  question: questions[randomIndex], answer: answers[randomIndex]};
}

//Counter of mistakes
let guesses = document.createElement('span');
guesses.className = "guesses";
let mistake = document.createElement('span');
mistake.className = "mistake";
mistake.textContent = "0";
guesses.appendChild(mistake);
guesses.textContent = "Incorrect guesses: " + mistake.textContent + " / 6";
quiz_part.appendChild(guesses);

//Keyboard
let keyboard = document.createElement('div');
keyboard.id = "keyboard";
quiz_part.appendChild(keyboard);

let keyboards = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100,
   102, 103, 104, 106, 107, 108, 122, 120, 99, 118, 98, 110, 109];

function init(){
  let out = '';
  for (let i = 0; i < keyboards.length; i++){
    out += '<button class="k-key" data="' + keyboards[i] + '">' + String.fromCharCode(keyboards[i]) + '</button>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();

//Input from virtual kb
let kKeys = document.querySelectorAll('.k-key');
kKeys.forEach(function (button) {
  button.addEventListener('click', function() {
    handleButtonClick(button.getAttribute('data'));
  });
});

let correctGuesses = 0;
let text = randomPair.answer;

////Input from physical kb
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
  if (event.key >= 'a' && event.key <= 'z') {
    handleButtonClick(event.key.charCodeAt(0));
  }
});

//Counter of mistake
function handleButtonClick(clickedKey) {
  console.log('Key clicked:', clickedKey);
  if (isLetterGuessed(clickedKey)) {
    return;
  }

  let clickedLetterExists = text.includes(String.fromCharCode(clickedKey));

  if (clickedLetterExists === false) {
    let currentMistakes = parseInt(mistake.textContent, 10);
    currentMistakes++;
    mistake.textContent = currentMistakes;
    guesses.textContent = "Incorrect guesses: " + currentMistakes + " / 6";
    console.log(currentMistakes);
    updateHangmanFigure(currentMistakes);

    if (currentMistakes === 6) {
      gameOver(false);
    }
  } else {
    updateAnswer(clickedKey);
    if (correctGuesses === text.length) {
      gameOver(true);
    }
  }
  disableKey(clickedKey);
}

//Man's parts when letter is incorrect
function updateHangmanFigure(mistakes) {
  let head = document.querySelector('.man .head');
  let body = document.querySelector('.man .body');
  let left_hand = document.querySelector('.man .left_hand');
  let right_hand = document.querySelector('.man .right_hand');
  let left_foot = document.querySelector('.man .left_foot');
  let right_foot = document.querySelector('.man .right_foot');

  if (head) {
    if (mistakes === 0) {
      head.style.border = '5px solid white';
    } else if (mistakes === 1) {
      head.style.border = '5px solid black';
    }
  }
  
  if (body) {
    if (mistakes === 0) {
      body.style.backgroundColor = 'white';
    } else if (mistakes === 2) {
      body.style.backgroundColor = 'black';
    }
  }

  if (left_hand) {
    if (mistakes === 0) {
      left_hand.style.backgroundColor = 'white';
    } else if (mistakes === 3) {
      left_hand.style.backgroundColor = 'black';
    }
  }

  if (right_hand) {
    if (mistakes === 0) {
      right_hand.style.backgroundColor = 'white';
    } else if (mistakes === 4) {
      right_hand.style.backgroundColor = 'black';
    }
  }

  
  if (left_foot) {
    if (mistakes === 0) {
      left_foot.style.backgroundColor = 'white';
    } else if (mistakes === 5) {
      left_foot.style.backgroundColor = 'black';
    }
  }

  if (right_foot) {
    if (mistakes === 0) {
      right_foot.style.backgroundColor = 'white';
    } else if (mistakes === 6) {
      right_foot.style.backgroundColor = 'black';
    }
  }
}

//Update of answer if correct letter
function updateAnswer(clickedKey) {
  let answerSpans = answer.querySelectorAll('span');
  for (let i = 0; i < text.length; i++) {
    if (text[i] === String.fromCharCode(clickedKey)) {
      answerSpans[i].textContent = String.fromCharCode(clickedKey);
      answerSpans[i].style.color = 'black';
      answerSpans[i].style.borderBottom = '5px solid white';
      correctGuesses++;
    }
  }
}

function disableKey(keyCode) {
  let keyElement = document.querySelector('.k-key[data="' + keyCode + '"]');
  if (keyElement) {
    keyElement.classList.add('disabled');
  }
}

function isLetterGuessed(letter) {
  let answerSpans = answer.querySelectorAll('span');
  for (let i = 0; i < text.length; i++) {
    if (answerSpans[i].textContent === letter) {
      return true; 
    }
  }
  return false; 
}

//Modal window
function showModal(message) {
  let modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'modal';

  let modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  let play_again = document.createElement('button');
  play_again.className = 'play_again';
  play_again.textContent = 'Play again?';
  play_again.addEventListener('click', function() {
    restartGame();
    modal.style.display = 'none';
  });

  let modalMessage = document.createElement('p');
  modalMessage.id = 'modal-message';
  modalMessage.textContent = message;

  modalContent.appendChild(modalMessage);
  modalContent.appendChild(play_again);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  modal.style.display = 'block';

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function gameOver(isWinner) {
  let message = isWinner
    ? 'Congratulations! You won! 😊'
    : 'Game over. You lost. The correct answer was: ' + answer.textContent;
  showModal(message);
}

function restartGame() {
  let initialMistakes = 0;
  resetHangmanFigure(initialMistakes);
  resetAnswer();
  resetGameStats();
}

function resetHangmanFigure(mistakes) {
  updateHangmanFigure(mistakes);
}

function resetAnswer() {
  let randomPair = getRandomQuestion();
  question.textContent = "Hint: " + randomPair.question;
  answer.textContent = '';
  updateAnswers(randomPair.answer);
  console.log(answer.textContent);
  console.log(text);
  text = randomPair.answer;
  correctGuesses = 0;
}

function resetGameStats() {
  let allKeys = document.querySelectorAll('.k-key');
  allKeys.forEach(function (key) {
    key.classList.remove('disabled');
  });
  mistake.textContent = "0";
  guesses.textContent = "Incorrect guesses: 0 / 6";
}