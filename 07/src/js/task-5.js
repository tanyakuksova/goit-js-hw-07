const body = document.querySelector('body');
const span = body.querySelector('.color');
const btn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', e => {
  const color = getRandomHexColor();
  span.innerHTML = color;
  body.style.backgroundColor = color;
});


