let counter = 0;
const counterValue = document.getElementById('counterValue');

function updateCounter() {
  counterValue.textContent = counter;
}

document.getElementById('increase').addEventListener('click', function () {
    counter++;
    updateCounter();
});

document.getElementById('decrease').addEventListener('click', function () {
    if (counter > 0) {
    counter--;
    }
    updateCounter();
});

document.getElementById('reset').addEventListener('click', function () {
    counter = 0;
    updateCounter();
});

const textInput = document.getElementById('textInput');
const preview = document.getElementById('preview');
const charCount = document.getElementById('charCount');
textInput.addEventListener('input', function () {
  if (textInput.value === '') {
    preview.textContent = 'Your text will appear here';
  } else {
    preview.textContent = textInput.value;
  }
  charCount.textContent = textInput.value.length;
});
document.getElementById('clear').addEventListener('click', function () {
  textInput.value = '';
  preview.textContent = 'Your text will appear here';
  charCount.textContent = 0;
  textInput.focus();
});

const imageSelect = document.getElementById('imageSelect');
const petImg = document.getElementById('petImg');
const caption = document.getElementById('caption');

imageSelect.addEventListener('change', function () {
  if (imageSelect.value === 'cat') {
    petImg.src = 'images/cat.png';
    petImg.alt = 'A white and orange cat with big eyes standing on a gray stool';
    caption.textContent = 'Cat: a fluffy cat looking straight into the camera.';
  } else if (imageSelect.value === 'dog') {
    petImg.src = 'images/dog.png';
    petImg.alt = 'A corgi with a white and orange coat sitting on a brown sofa';
    caption.textContent = 'Dog: a corgi relaxing on the sofa with a smile.';
  } else {
    petImg.src = 'images/rabbit.png';
    petImg.alt = 'A small orange rabbit sticking out its tongue near a tree trunk';
    caption.textContent = 'Rabbit: a fluffy orange rabbit outdoors.';
  }
});

const keyInput = document.getElementById('keyInput');
const keyStatus = document.getElementById('keyStatus');
const keyResult = document.getElementById('keyResult');
keyInput.addEventListener('keydown', function (event) {
  keyStatus.textContent = 'You pressed: ' + event.key;
  if (event.key === 'Enter') {
    event.preventDefault();
    keyResult.textContent = keyInput.value;
  }
  if (event.key === 'Escape') {
    keyInput.value = '';
    keyResult.textContent = '';
  }
});

const card = document.getElementById('card');
const cardInfo = document.getElementById('cardInfo');
card.addEventListener('mouseenter', function () {
  card.classList.add('highlight');
  cardInfo.textContent = 'The mouse is over the card.';
});

card.addEventListener('mouseleave', function () {
  card.classList.remove('highlight');
  cardInfo.textContent = 'Move the mouse over the card or press Tab to focus it.';
});
card.addEventListener('focus', function () {
  card.classList.add('highlight');
  cardInfo.textContent = 'The card has keyboard focus.';
});
card.addEventListener('blur', function () {
  card.classList.remove('highlight');
  cardInfo.textContent = 'Move the mouse over the card or press Tab to focus it.';
});