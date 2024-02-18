const input = document.querySelector('input[type=number]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');



btnCreate.addEventListener('click', () => {
  const inputNumber = input.valueAsNumber;
  if (inputNumber >= 1 && inputNumber <= 100) {
    createBoxes(input.valueAsNumber);
  }

});

function createBoxes(numb) {
  let height = 30;
  let width = 30;
  let backgroundColor;
  const arrayBoxes = [];
  for (let i = 0; i < numb; i++) {
    backgroundColor = getRandomHexColor();
    arrayBoxes.push(`<div style="height: ${height}px; width: ${width}px; background-color: ${backgroundColor};"></div>`);
    height += 10;
    width += 10;
  }
  boxes.innerHTML = arrayBoxes.join('')
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}

btnDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

