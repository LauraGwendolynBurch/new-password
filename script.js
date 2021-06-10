// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Select a password length between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a numer between 8 and 128");
    return;
  }
  if (isNaN(passwordLength)) {
    alert("Please choose a number.");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
