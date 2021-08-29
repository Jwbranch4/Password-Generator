// Assignment code here

// List of possible characters, numbers, uppercase to lowercase letters in arrays

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
];

// Start of generate Password function

function generatePassword() {
  // Ask for length of password
  var passwordLength = parseInt(
    prompt("Please choose password length between 8 and 128")
  );
  // check if valid number is given in prompt
  if (!passwordLength) {
    alert("Please enter number between 8 and 128");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt("please select number between 8 and 128.")
    );
  } else {
    var selectedNumbers = confirm(
      "Will the password have numbers? OK yes CANCEL no"
    );
    var selectedLowerCase = confirm(
      "Will the password have lower case letters? OK yes CANCEL no"
    );
    var selectedUpperCase = confirm(
      "Will the password have upper case letters? OK yes CANCEL no"
    );
    var selectedSpecialCharacters = confirm(
      "Will the password have special characters? OK yes CANCEL no"
    );
  }
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
