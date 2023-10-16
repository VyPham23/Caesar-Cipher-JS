const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const messageInput = document.getElementById('message');
const shiftAmountInput = document.getElementById('shiftAmount');
const resultText = document.getElementById('result');

encodeBtn.addEventListener('click', () => {
  const message = messageInput.value;
  const shiftAmount = parseInt(shiftAmountInput.value, 10);
  const encodedMessage = caesarCipherEncode(message, shiftAmount);
  resultText.textContent = 'Encoded Message: ' + encodedMessage;
});

decodeBtn.addEventListener('click', () => {
  const message = messageInput.value;
  const shiftAmount = parseInt(shiftAmountInput.value, 10);
  const decodedMessage = caesarCipherEncode(message, -shiftAmount);
  resultText.textContent = 'Decoded Message: ' + decodedMessage;
});

function caesarCipherEncode(text, shift) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
  
      if (char.match(/[a-zA-Z]/)) { //if alphabetic character
        const isUpperCase = char === char.toUpperCase();
        const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = ((charCode - baseCharCode + shift) % 26 + 26) % 26 + baseCharCode;
  
        result += String.fromCharCode(shiftedCharCode);
      } else {
        result += char;
      }
    }
  
    return result;
}
