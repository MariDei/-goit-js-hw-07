'use strict'
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    const name = nameInput.value.trim();
    nameOutput.textContent = name ? name : 'Anonymous';
});