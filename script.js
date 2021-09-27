// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //choose the length of the password
    var passwordLength = window.prompt("How many characters would you like your password to be? Please select between 8-128 characters.")

        console.log(passwordLength)
    //include lowercase letters?
    var lowerCase = window.confirm("Would you like your password to include lowercase characters?")
        
        console.log(lowerCase)
    //include uppercase letters?
    var upperCase = window.confirm("Would you like your password to include Uppercase characters?")
        
        console.log(upperCase)
    
    //include special characters?
    var specialCharacter = window.confirm("Would you like your password to include special characters?")

        console.log(specialCharacter)
    
    //include numbers?
    var numbers = window.confirm("Would you like your password to include numbers?")

        console.log(numbers)

    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

