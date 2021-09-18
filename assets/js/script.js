// Assignment code here
// functions to generate random letters, numbers, and symbols
// Using built in charset chart array to randomly get characters
function getRandomLowerCaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());

function generatePassword() {}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
