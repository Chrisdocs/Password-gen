// Assignment code here

var generatePassword = function() {

    var passLength = window.prompt("Please enter a number between 8 and 128.");
      localStorage.setItem("length", passLength);
      if (passLength < 8 || passLength > 128) {
        alert("Please enter a valid number between 8 and 128.");
      }
    var upperCase = window.confirm("Would you like to include uppercase characters?");
      if (upperCase === true) {
        upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        localStorage.setItem("uppercase", upperCase);
      } else {
        upperCase = null;
      }
    var lowerCase = window.confirm("Would you like to include lowercase characters?");
      if (lowerCase === true) {
        lowerCase = "abcdefghijklmnopqrstuvwxyz";
        localStorage.setItem("lowercase", lowerCase);
      } else {
        lowerCase = null;
      }
    var specialChar = window.confirm("Would you like to utilize special characters?");
      if (specialChar === true) {
        specialChar = "!@#$%&?";
        localStorage.setItem("specialchar", specialChar);
      } else {
        specialChar = null;
      }
    var numChar = window.confirm("Would you like to use numbers in your password?")
    if (numChar === true) {
      numChar = "1234567890";
      localStorage.setItem("numbers", numChar);
    } else {
      numChar = "";
    }
    };

localStorage.clear("key");


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
