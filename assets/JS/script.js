
// Assignment code here

//calls the function when the generate password button is clicked
var generatePassword = function() {
  
  //prompts the user to provide a password length between 8 and 128
  passwordLength = window.prompt("Please enter a number between 8 and 128.");
  if (passwordLength > 8 && passwordLength < 128) {
    localStorage.setItem("length", passwordLength);
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.prompt("you must enter a valid number between 8 and 128.")
  }

  //prompts the user to confirm if they would like to use numbers
  numChar = window.confirm("Would you like to use numbers in your password?")
    if (numChar === true) {
      numChar = "1234567890";
    } else {
      numChar = "";
    }

    //promtps the user is they would like to use upper case letters
  upperCase = window.confirm("Would you like to include uppercase characters?");
    if (upperCase === true) {
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      upperCase = null;
    }

    //promtps the user if they would like to use lower case letters
  lowerCase = window.confirm("Would you like to include lowercase characters?");
    if (lowerCase === true) {
      lowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      lowerCase = null;
    }

    //prompts the user if they would like to use special characters
  specialChar = window.confirm("Would you like to utilize special characters?");
    if (specialChar === true) {
      specialChar = "!@#$%&?";
    } else {
      specialChar = null;
    }

//following code was found and modified from https://www.codegrepper.com/code-examples/javascript/javascript+password+generator+example

    //creates a variable which combines all the user selected inputs into a single string
    var allChars = numChar + upperCase + lowerCase + specialChar

    //takes the allChar variable and applies an array to it which the length is determined by passwordLength
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[passwordLength] = "";
    randPasswordArray = randPasswordArray.fill(allChars, "");
    //randomizes the order and returns it
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
//creates a for loop, not actually totally sure how this works code found here: https://www.codegrepper.com/code-examples/javascript/javascript+password+generator+example
function shuffleArray(array) {
  for (var i = array.length; i > 0; i--) {
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