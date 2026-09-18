const vocabulary = [
  { estonian: 'sõlm', russian: 'узел' },
  { estonian: 'võrk', russian: 'сеть' },
  { estonian: 'sõnum', russian: 'сообщение' },
  { estonian: 'teenus', russian: 'сервис' },
  { estonian: 'andmed', russian: 'данные' },
  { estonian: 'turvalisus', russian: 'безопасность' },
  { estonian: 'ühendus', russian: 'соединение' },
  { estonian: 'järjekord', russian: 'очередь' },
];

const state = {
  estonianToRussian: null,
  russianToEstonian: null,
};

// Normalize user input so capitalization and extra whitespace do not affect a valid response.
function normalize(value) {
  return value.trim().toLocaleLowerCase('et-EE');
}

// Select a word without repeating the current prompt in the same direction.
function randomWord(previousWord) {
  const availableWords = vocabulary.filter((entry) => entry !== previousWord);
  return availableWords[Math.floor(Math.random() * availableWords.length)];
}

// Reset both independent request/response flows whenever the refresh button is used.
function refreshPrompts() {
  state.estonianToRussian = randomWord(state.estonianToRussian);
  state.russianToEstonian = randomWord(state.russianToEstonian);

  document.querySelector('#estonian-prompt').textContent = state.estonianToRussian.estonian;
  document.querySelector('#russian-prompt').textContent = state.russianToEstonian.russian;

  document.querySelectorAll('input').forEach((input) => {
    input.value = '';
  });
  document.querySelectorAll('.feedback').forEach((feedback) => {
    feedback.textContent = '';
    feedback.className = 'feedback';
  });
}

// Show a concise result beside the input, keeping validation feedback local to its column.
function showFeedback(element, isCorrect, expected) {
  element.className = `feedback ${isCorrect ? 'success' : 'error'}`;
  element.textContent = isCorrect ? 'Õige vastus. Payload on vastu võetud.' : `Veel mitte. Oodatud: ${expected}`;
}

// Validate one direction against the matching vocabulary property.
function validate(direction) {
  const isEstonianPrompt = direction === 'estonian-to-russian';
  const currentWord = isEstonianPrompt ? state.estonianToRussian : state.russianToEstonian;
  const inputId = isEstonianPrompt ? '#russian-answer' : '#estonian-answer';
  const feedbackId = isEstonianPrompt ? '#russian-feedback' : '#estonian-feedback';
  const expected = isEstonianPrompt ? currentWord.russian : currentWord.estonian;
  const answer = normalize(document.querySelector(inputId).value);

  showFeedback(document.querySelector(feedbackId), answer === normalize(expected), expected);
}

// Bind click and keyboard events so the tester works well on both desktop and mobile clients.
document.querySelector('#refresh-button').addEventListener('click', refreshPrompts);
document.querySelectorAll('.check-button').forEach((button) => {
  button.addEventListener('click', () => validate(button.dataset.check));
});
document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      validate(input.id === 'russian-answer' ? 'estonian-to-russian' : 'russian-to-estonian');
    }
  });
});

// Generate the first pair as soon as the browser has registered all page controls.
refreshPrompts();