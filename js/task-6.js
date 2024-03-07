'use strict';

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement('div');
    divElement.style.width = `${30 + i * 10}px`;
    divElement.style.height = `${30 + i * 10}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(divElement);
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
