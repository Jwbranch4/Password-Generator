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
// function called by click event to create password
function generatePassword() {
  var randomPassword = "";
  // prompt to get password length
  var passwordLength = prompt(
    "Please input desired length of password between 8 and 128"
  );
  // check for correct length and confirm windows to ask for further parameters.
  if (passwordLength >= 8 && passwordLength <= 128) {
    var hasLowerCase = confirm("Do you want lower case letters?");
    var hasUpperCase = confirm("Do you want Upper case letters?");
    var hasNumber = confirm("Do you want numbers?");
    var hasSymbols = confirm("Do you want symbols?");
    // if the number is not within scope
  } else {
    alert("Need to pick number between 8 and 128");
  }
  // need to be able divide the number of function calls to make sure the selected parameters are used
  var numberOfParameters = hasLowerCase + hasUpperCase + hasNumber + hasSymbols;
  var numberOfTimesToCallFunction = passwordLength / numberOfParameters;
  // calling the selected parameters
  if (hasLowerCase) {
    for (var i = 0; i < numberOfTimesToCallFunction; i++) {
      randomPassword += getRandomLowerCaseLetter();
    }
  }
  if (hasUpperCase) {
    for (var i = 0; i < numberOfTimesToCallFunction; i++) {
      randomPassword += getRandomUpperCaseLetter();
    }
  }
  if (hasNumber) {
    for (var i = 0; i < numberOfTimesToCallFunction; i++) {
      randomPassword += getRandomNumber();
    }
  }
  if (hasSymbols) {
    for (var i = 0; i < numberOfTimesToCallFunction; i++) {
      randomPassword += getRandomSymbol();
    }
  }
  // needed to randomize the generated string for a more truly random password
  // split password into an array then used the sort with random function then put back together with join
  var shuffledPassword = randomPassword
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return shuffledPassword;
}

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
