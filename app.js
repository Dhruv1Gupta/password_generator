const passwordElement = document.getElementById('password');
const generateButton = document.getElementById('generate');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const lengthInput = document.getElementById('length');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*"()_+[]{}|;:,.<>?';

function getRandomChar(chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}

function generatePassword() {
    const length = parseInt(lengthInput.value);
    let availableChars = '';

    if (uppercaseCheckbox.checked) {
        availableChars += uppercaseChars;
    }
    if (lowercaseCheckbox.checked) {
        availableChars += lowercaseChars;
    }
    if (numbersCheckbox.checked) {
        availableChars += numberChars;
    }
    if (symbolsCheckbox.checked) {
        availableChars += symbolChars;
    }

    if (availableChars === '') {
        alert('Please select at least one character type');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += getRandomChar(availableChars);
    }

    passwordElement.value = password;
}

generateButton.addEventListener('click', generatePassword);
