// Assignment code here
var generatePassword = function() {
  
  passwordLength = window.prompt("Please enter a number between 8 and 128.");
  localStorage.setItem("length", passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
  }

  numChar = window.confirm("Would you like to use numbers in your password?")
    if (numChar === true) {
      numChar = "1234567890";
    } else {
      numChar = "";
    }

  upperCase = window.confirm("Would you like to include uppercase characters?");
    if (upperCase === true) {
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      upperCase = null;
    }

  lowerCase = window.confirm("Would you like to include lowercase characters?");
    if (lowerCase === true) {
      lowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      lowerCase = null;
    }

  specialChar = window.confirm("Would you like to utilize special characters?");
    if (specialChar === true) {
      specialChar = "!@#$%&?";
    } else {
      specialChar = null;
    }

    var allChars = numChar + upperCase + lowerCase + specialChar
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[passwordLength] = "";
    randPasswordArray = randPasswordArray.fill(allChars, "");
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
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
