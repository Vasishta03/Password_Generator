const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

generateButton.addEventListener('click', () => {
    const length = parseInt(lengthInput.value);
    const hasUppercase = uppercaseCheckbox.checked;
    const hasLowercase = lowercaseCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;

    const charset = [];
    if (hasUppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (hasLowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
    if (hasNumbers) charset.push('0123456789');
    if (hasSymbols) charset.push('!@#$%^&*()_-+=');

    let password = '';
    for (let i = 0; i < length; i++) {
        const charSet = charset[Math.floor(Math.random() * charset.length)];
        const charIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[charIndex];
    }

    passwordInput.value = password;
});

copyButton.addEventListener('click', () => {
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
