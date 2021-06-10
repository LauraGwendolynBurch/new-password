//DECLARE 'lowercaseLetters'
//DECLARE 'uppercaseLetters'
//DECLARE 'numbers'
//DECLARE 'specialCharacters'
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = [
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
var uppercase = [
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
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacter = [
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
var strongPassword = "";
var optionsPicked = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function passwordLengthCall() {
  var passwordLength = prompt("Select a password length between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a numer between 8 and 128");
    return;
  }
  if (isNaN(passwordLength)) {
    alert("Please choose a number.");
    return;
  }
  upperCaseCall();
}

function upperCaseCall() {
  var upperCaseCharaters = confirm(
    "Do you want uppercase letters in your password?"
  );
  if (upperCaseCharaters === true) {
    optionsPicked = optionsPicked.concat(uppercase);
    var randomUppercase =
      uppercase[Math.floor(Math.random() * uppercase.length)];
    strongPassword += randomUppercase;
  }
  lowerCaseCall();
}

function lowerCaseCall() {
  var lowerCaseCharaters = confirm(
    "Do you want lowercase letters in your password?"
  );
  if (lowerCaseCharaters === true) {
    optionsPicked = optionsPicked.concat(lowercase);
    var randomLowercase =
      lowercase[Math.floor(Math.random() * lowercase.length)];
    strongPassword += randomLowercase;
  }
  speCharCall();
}

function speCharCall() {
  var speCharOption = confirm(
    "Do you want special characters in your password?"
  );
  if (speCharOption === true) {
    optionsPicked = optionsPicked.concat(specialCharacter);
    var randomspeChar =
      specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
    strongPassword += randomspeChar;
  }
  numberCall();
}

function numberCall() {
  var numberCharaters = confirm("Do you want numbers in your password?");
  if (numberCharaters === true) {
    optionsPicked = optionsPicked.concat(numbers);
    var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    strongPassword += randomNumbers;
  }
  pickSomething();
}

function pickSomething() {
  if (!numbers && !uppercase && !lowercase && !specialCharacter) {
    alert("You must choose at least one option.");
    return;
  }
}

function generatePassword() {
  passwordLengthCall();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
